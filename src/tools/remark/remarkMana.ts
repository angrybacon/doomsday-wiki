import { type Text } from 'mdast';
import { type TextDirective } from 'mdast-util-directive';
import { type Plugin } from 'unified';
import { type Node } from 'unist';
import { select } from 'unist-util-select';
import { Test, visit } from 'unist-util-visit';

/** Parse mana directives and augment properties with the pattern query. */
export const remarkMana: Plugin = () => (tree) => {
  const test: Test = { name: 'mana', type: 'textDirective' };
  visit<Node, Test>(tree, test, (node) => {
    const directive = node as Node & TextDirective;
    const text = select('text', directive) as Text;
    if (text) {
      directive.data = {
        ...directive.data,
        hProperties: {
          ...(directive.data?.hProperties as Record<string, unknown>),
          pattern: text.value,
        },
      };
    }
  });
};
