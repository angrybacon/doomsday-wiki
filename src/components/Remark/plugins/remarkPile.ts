import type { Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import type { PluggableList } from 'react-markdown/lib/react-markdown';
import { selectAll } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';

type Pluggable = PluggableList extends readonly (infer T)[] ? T : never;

export const remarkPile: Pluggable = () => (tree) => {
  visit<Node, Test>(tree, 'containerDirective', (node) => {
    const directive = node as ContainerDirective;
    const cards = selectAll('text', directive) as Text[];
    directive.data = {
      ...directive.data,
      hName: directive.name,
      hProperties: {
        ...directive.attributes,
        cards: cards.map((card) => card.value),
      },
    };
  });
};
