import type { Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import { selectAll } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';
import { readFaces } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import type { Scries, ScryCard, ScryData } from '@/tools/scryfall/types';

/**
 * Parse the Markdown tree and visit all Scryfall directives in order to compute
 * the queries within.
 * This Unified pluggable returns a record of queries and responses pairs.
 */
export const remarkScries =
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
        const promise: Promise<ScryData> = scry(value).then(
          (response) => {
            const cards: ScryCard[] = readFaces(response);
            scries[value] = cards;
            return response;
          },
          (error) => {
            throw error;
          }
        );
        promises.push(promise);
      });
    });
    await Promise.allSettled(promises);
    return scries;
  };
