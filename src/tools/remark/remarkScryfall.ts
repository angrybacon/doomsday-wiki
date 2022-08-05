import type { Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import { selectAll } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';
import { Scope, log, logVerbose } from '@/tools/logger/log';
import { readFirstFace } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import type { Scries, ScryCard, ScryData } from '@/tools/scryfall/types';

/**
 * Parse the Markdown tree and visit all Scryfall directives in order to compute
 * the queries within.
 * This Unified pluggable returns a record of queries and responses pairs.
 */
export const remarkScryfall =
  () =>
  async (tree: Node): Promise<Scries> => {
    /** Unist tests to only visit nodes that contain Scryfall queries. */
    const tests: Test = [{ name: 'row', type: 'containerDirective' }];
    /** Contain the list of Scryfall promises to await for. */
    const promises: Promise<ScryData>[] = [];
    /** Record for query and response pairs. */
    const scries: Scries = {};
    visit<Node, Test>(tree, tests, (node) => {
      const directive = node as ContainerDirective;
      const texts = selectAll('text', directive) as Text[];
      texts.forEach(({ value }) => {
        const promise = scry(value).then((response) => {
          // NOTE Scry results can contain a list in case of non-exact matches.
          //      In this case we only care about the first result.
          // TODO We currently only serve the first face of a card.
          //      We might want to provide a tuple containing all faces instead
          //      to provide both faces in Markdown content.
          const card: ScryCard = readFirstFace(response);
          scries[value] = card;
          return response;
        });
        promises.push(promise);
      });
    });
    await Promise.allSettled(promises);
    if (process.env.REMARK_LOGS === 'true') {
      log(`Found ${Object.keys(scries).length} cards`, Scope.REMARK);
      Object.values(scries).map((card) => logVerbose(`  ${card.name}`));
    }
    return scries;
  };
