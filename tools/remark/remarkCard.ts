import type { ReadPlugin } from '@korumite/kiwi';

import { RemarkError, hastify } from '@korumite/kiwi';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';

import { translate } from '~/tools/rosetta/translate';

/** Augment card directives with the real cards names */
export const remarkCard: ReadPlugin<[path: string]> = (path) => (tree) => {
  visit(tree, (node) => {
    if (node.type !== 'textDirective' || node.name !== 'card') return;
    const text = toString(node).trim();
    if (text) hastify(node, { name: translate(text).name });
    else throw new RemarkError('Missing card text', { node, path });
  });
  return tree;
};
