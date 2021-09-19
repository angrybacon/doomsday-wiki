import type { Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import { selectAll } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';
import { scry } from '@/tools/scryfall/scry';
import type { ScryData, ScryResponse } from '@/tools/scryfall/types';

type RemarkScryfall = () => (tree: Node) => Promise<Record<string, ScryData>>;

/**
 * Parse the Markdown tree and visit all directive nodes in order to compute the
 * Scryfall queries within.
 * This Unified pluggable returns a record of query and response pairs.
 */
export const remarkScryfall: RemarkScryfall = () => async (tree) => {
  /** Contain the list of Scryfall promises to await for. */
  const promises: Promise<ScryResponse>[] = [];
  /** Record for query and response pairs. */
  const scries: Record<string, ScryData> = {};
  visit<Node, Test>(tree, 'containerDirective', (node) => {
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
