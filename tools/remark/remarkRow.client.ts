import { hastify } from '@korumite/kiwi/client';
import { type Root, type Text } from 'mdast';
import { select } from 'unist-util-select';
import { visit } from 'unist-util-visit';

import { RemarkError } from '@/tools/remark/RemarkError';
import { type Scries } from '@/tools/scryfall/types';

/** Augment row directives with metadata found in `scries */
export const remarkRow =
  ({ file, scries }: { file: string; scries: Scries }) =>
  (tree: Root) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective' || node.name !== 'row') return;
      const text = select('text', node) as Text | undefined;
      if (!text) {
        throw new RemarkError('Missing text for row', { file, node });
      }
      const row = text.value.split('\n').map((query, index) => {
        const data = scries[query];
        if (!data?.length) {
          throw new RemarkError(`Missing data for "${query}"`, { file, node });
        }
        return { data, id: `${text.position?.start.offset}-${index}` };
      });
      // NOTE The `hast` library does not JSON-encode flat arrays
      hastify(node, { row: { cards: row } });
    });
    return tree;
  };
