import { type LeafDirective } from 'mdast-util-directive';
import { type Node } from 'unist';
import { Test, visit } from 'unist-util-visit';

import { type Decklists } from '@/tools/decklists/types';
import { hastify } from '@/tools/remark/hastify';
import { type Remarker } from '@/tools/remark/typings';

/** Augment decklist directives with metadata found in `decklists`. */
export const remarkDecklist: Remarker<[{ decklists: Decklists }]> =
  ({ decklists }) =>
  (tree) => {
    const tests = [{ name: 'decklist', type: 'leafDirective' }];
    visit<Node, Test>(tree, tests, (node) => {
      const directive = node as LeafDirective;
      const path = directive.attributes?.path;
      if (path) {
        if (!decklists[path]) {
          console.error(`[remark] Missing decklist with path "${path}"`);
        }
        hastify(directive, { decklist: decklists[path] });
      } else {
        console.error('[remark] Missing "path" attribute in decklist');
      }
    });
    return tree;
  };
