import type { LeafDirective } from 'mdast-util-directive';
import { Node, Test, visit } from 'unist-util-visit';
import type { Decklists } from '@/tools/decklists/types';
import type { Remarker } from '@/tools/remark/types';

/**
 * Parse decklist directives and augment properties with metadata found in
 * `decklists`.
 */
export const remarkDecklist: Remarker<{ decklists: Decklists }> =
  ({ decklists }) =>
  () =>
  (tree) => {
    const test: Test = { name: 'decklist', type: 'leafDirective' };
    visit<Node, Test>(tree, test, (node) => {
      const directive = node as LeafDirective;
      const path: string | undefined = directive.attributes?.path;
      if (path) {
        directive.data = {
          ...directive.data,
          hProperties: {
            ...(directive.data?.hProperties as Record<string, unknown>),
            ...decklists[path],
          },
        };
      }
    });
  };
