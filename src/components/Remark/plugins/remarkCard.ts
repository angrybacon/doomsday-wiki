import type { Text } from 'mdast';
import type { TextDirective } from 'mdast-util-directive';
import type { PluggableList } from 'react-markdown/lib/react-markdown';
import { select } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';

type Pluggable = PluggableList extends readonly (infer T)[] ? T : never;

export const remarkCard: Pluggable = () => (tree) => {
  visit<Node, Test>(tree, 'textDirective', (node) => {
    const directive = node as TextDirective;
    const card = select('text', directive) as Text;
    if (card) {
      directive.data = {
        ...directive.data,
        hName: directive.name,
        hProperties: {
          ...directive.attributes,
          card: card.value,
        },
      };
    }
  });
};
