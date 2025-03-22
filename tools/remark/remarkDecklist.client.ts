import { hastify } from '@korumite/kiwi/client';
import { type Root } from 'mdast';
import { visit } from 'unist-util-visit';

import { type Decklists } from '@/tools/decklists/types';
import { RemarkError } from '@/tools/remark/RemarkError';

/** Augment decklist directives with metadata found in `decklists` */
export const remarkDecklist =
  ({ decklists, file }: { decklists: Decklists; file: string }) =>
  (tree: Root) => {
    visit(tree, (node) => {
      if (node.type !== 'leafDirective' || node.name !== 'decklist') return;
      const path = node.attributes?.path;
      if (path) {
        if (!decklists[path]) {
          throw new RemarkError(`Missing file "${path}"`, { file, node });
        }
        hastify(node, { decklist: decklists[path] });
      } else {
        throw new RemarkError('Missing decklist "path"', { file, node });
      }
    });
    return tree;
  };
