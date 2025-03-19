import { hastify } from '@korumite/kiwi/client';
import { type Root } from 'mdast';
import { visit } from 'unist-util-visit';

import { type Decklists } from '@/tools/decklists/types';

/** Augment decklist directives with metadata found in `decklists` */
export const remarkDecklist =
  ({ decklists }: { decklists: Decklists }) =>
  (tree: Root) => {
    visit(tree, (node) => {
      if (node.type !== 'leafDirective' || node.name !== 'decklist') return;
      const path = node.attributes?.path;
      if (path) {
        if (!decklists[path]) {
          console.error(`[remark] Missing decklist with path "${path}"`);
        }
        hastify(node, { decklist: decklists[path] });
      } else {
        console.error('[remark] Missing "path" attribute in decklist');
      }
    });
    return tree;
  };
