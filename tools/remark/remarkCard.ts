import type { ReadPlugin } from '@korumite/kiwi';
import type { ScrySingleResponse } from '@korumite/scrydrop';

import { hastify } from '@korumite/kiwi';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';

/** Augment card directives with the real cards names */
export const remarkCard: ReadPlugin<
  [path: string, scries: Record<string, ScrySingleResponse>]
> = (path, scries) => (tree, file) => {
  visit(tree, [{ name: 'card', type: 'textDirective' }], (node) => {
    file.path = file.path || path;
    const text = toString(node).trim();
    if (!text) file.fail('Missing name for `card` directive', node);
    const faces = scries[text];
    if (!faces?.length) file.fail(`Missing scry for "${text}"`, node);
    hastify(node, { data: { card: faces } });
  });
  return tree;
};
