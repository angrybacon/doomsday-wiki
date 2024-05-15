import { hastify } from '@korumite/kiwi/client';
import { type Text } from 'mdast';
import { type TextDirective } from 'mdast-util-directive';
import { type Node } from 'unist';
import { select } from 'unist-util-select';
import { visit, type Test } from 'unist-util-visit';

import { getCard } from '@/tools/game/getCard';
import { type Remarker } from '@/tools/remark/typings';

/** Augment card directives with the real cards names. */
export const remarkCard: Remarker = () => (tree) => {
  const tests = [{ name: 'card', type: 'textDirective' }];
  visit<Node, Test>(tree, tests, (node) => {
    const directive = node as TextDirective;
    const text = select('text', directive) as Text | undefined;
    if (text) {
      hastify(directive, { name: getCard(text.value).name });
    } else {
      console.error(`[remark] Missing text for directive "${directive.name}"`);
    }
  });
  return tree;
};
