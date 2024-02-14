import { type Text } from 'mdast';
import { type TextDirective } from 'mdast-util-directive';
import { type Plugin } from 'unified';
import { type Node } from 'unist';
import { select } from 'unist-util-select';
import { Test, visit } from 'unist-util-visit';

import { getCard } from '@/tools/game/getCard';

/** Parse card directives and augment properties with the card name. */
export const remarkCard: Plugin = () => (tree) => {
  const test: Test = { name: 'card', type: 'textDirective' };
  visit<Node, Test>(tree, test, (node) => {
    const directive = node as Node & TextDirective;
    const text = select('text', directive) as Text;
    if (text) {
      directive.data = {
        ...directive.data,
        hProperties: {
          ...(directive.data?.hProperties as Record<string, unknown>),
          name: getCard(text.value).name,
        },
      };
    }
  });
};
