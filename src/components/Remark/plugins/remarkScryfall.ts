import type { Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import { selectAll } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';
import { scry } from '@/tools/scryfall/scry';
import type { Scries, ScryResponse } from '@/tools/scryfall/types';

type RemarkScryfall = () => (tree: Node) => Promise<Scries>;

/**
 * Parse the Markdown tree and visit all Scryfall directives in order to compute
 * the queries within.
 * This Unified pluggable returns a record of queries and responses pairs.
 */
export const remarkScryfall: RemarkScryfall = () => async (tree) => {
  /** Unist tests to only visit nodes that contain Scryfall queries. */
  const tests: Test = [{ name: 'row', type: 'containerDirective' }];
  /** Contain the list of Scryfall promises to await for. */
  const promises: Promise<ScryResponse>[] = [];
  /** Record for query and response pairs. */
  const scries: Scries = {};
  visit<Node, Test>(tree, tests, (node) => {
    const directive = node as ContainerDirective;
    const texts = selectAll('text', directive) as Text[];
    texts.forEach(({ value }) => {
      const promise = scry(value).then((response) => {
        scries[value] = response.data;
        return response;
      });
      promises.push(promise);
    });
  });
  await Promise.allSettled(promises);
  return scries;
};
