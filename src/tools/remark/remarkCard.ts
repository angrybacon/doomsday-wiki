import type { Text } from 'mdast';
import type { Plugin } from 'unified';
import type { TextDirective } from 'mdast-util-directive';
import { select } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';

/** Parse card directives and augment properties with the card name. */
export const remarkCard: Plugin = () => (tree) => {
  const test: Test = { name: 'card', type: 'textDirective' };
  visit<Node, Test>(tree, test, (node) => {
    const directive = node as TextDirective;
    const text = select('text', directive) as Text;
    if (text) {
      directive.data = {
        ...directive.data,
        hProperties: {
          ...(directive.data?.hProperties as Record<string, unknown>),
          name: text.value,
        },
      };
    }
  });
};
