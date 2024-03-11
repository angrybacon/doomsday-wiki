import { type Text } from 'mdast';
import { type TextDirective } from 'mdast-util-directive';
import { type Node } from 'unist';
import { select } from 'unist-util-select';
import { Test, visit } from 'unist-util-visit';

import { hastify } from '@/tools/remark/hastify';
import { Remarker } from '@/tools/remark/typings';

/** Augment mana directives with the pattern query. */
export const remarkMana: Remarker = () => (tree) => {
  const tests = [{ name: 'mana', type: 'textDirective' }];
  visit<Node, Test>(tree, tests, (node) => {
    const directive = node as Node & TextDirective;
    const text = select('text', directive) as Text | undefined;
    if (text) {
      hastify(directive, { pattern: text.value });
    } else {
      console.error(`[remark] Missing text for directive "${directive.name}"`);
    }
  });
  return tree;
};
