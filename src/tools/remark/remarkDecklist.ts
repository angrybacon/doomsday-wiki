import type { LeafDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import { Node, Test, visit } from 'unist-util-visit';
import type { Decklists } from '@/tools/decklists/types';

/**
 * Parse decklist directives and augment properties with metadata found in
 * `decklists`.
 */
export const remarkDecklist: Plugin<[{ decklists: Decklists }]> =
  ({ decklists }) =>
  (tree) => {
    const test: Test = { name: 'decklist', type: 'leafDirective' };
    visit<Node, Test>(tree, test, (node) => {
      const directive = node as LeafDirective;
      const path: string | undefined = directive.attributes?.path;
      if (path) {
        if (!decklists[path]) {
          console.error(`[remark] Missing decklist for path '${path}'`);
        }
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
