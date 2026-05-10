import { hastify } from '@korumite/kiwi';
import { type Root, type Text } from 'mdast';
import { type Plugin } from 'unified';
import { select } from 'unist-util-select';
import { visit } from 'unist-util-visit';

import { RemarkError } from '@/tools/remark/RemarkError';
import { translate } from '@/tools/rosetta/translate';

/** Augment card directives with the real cards names */
export const remarkCard: Plugin<[path: string], Root> = (path) => (tree) => {
  visit(tree, (node) => {
    if (node.type !== 'textDirective' || node.name !== 'card') return;
    const text = select('text', node) as Text | undefined;
    if (text) hastify(node, { name: translate(text.value).name });
    else throw new RemarkError('Missing card text', { node, path });
  });
  return tree;
};
