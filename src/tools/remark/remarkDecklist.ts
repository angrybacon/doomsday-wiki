import type { LeafDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import type { Node } from 'unist';
import { Test, visit } from 'unist-util-visit';
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
      const directive = node as Node & LeafDirective;
      const path = directive.attributes?.path;
      if (path) {
        if (!decklists[path]) {
          console.error(`[remark] Missing decklist "${path}"`);
        }
        directive.data = {
          ...directive.data,
          hProperties: {
            ...(directive.data?.hProperties as Record<string, unknown>),
            ...decklists[path],
          },
        };
      } else {
        console.error(`[remark] Missing 'path' attribute in decklist`);
      }
    });
  };
