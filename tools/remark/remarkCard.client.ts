import { hastify } from '@korumite/kiwi/client';
import { type Root, type Text } from 'mdast';
import { select } from 'unist-util-select';
import { visit } from 'unist-util-visit';

import { getCard } from '@/tools/game/getCard';
import { RemarkError } from '@/tools/remark/RemarkError';

/** Augment card directives with the real cards names */
export const remarkCard =
  ({ file }: { file: string }) =>
  (tree: Root) => {
    visit(tree, (node) => {
      if (node.type !== 'textDirective' || node.name !== 'card') return;
      const text = select('text', node) as Text | undefined;
      if (text) {
        hastify(node, { name: getCard(text.value).name });
      } else {
        throw new RemarkError('Missing card text', { file, node });
      }
    });
    return tree;
  };
