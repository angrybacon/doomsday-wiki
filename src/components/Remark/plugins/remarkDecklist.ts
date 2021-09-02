import type { LeafDirective } from 'mdast-util-directive';
import type { PluggableList } from 'react-markdown/lib/react-markdown';
import { Node, Test, visit } from 'unist-util-visit';
import type { Decklists } from '@/tools/decklists/types';

type Pluggable = PluggableList extends readonly (infer T)[] ? T : never;

export const remarkDecklist: (decklists: Decklists) => Pluggable =
  (decklists) => () => (tree) => {
    visit<Node, Test>(tree, 'leafDirective', (node) => {
      const directive = node as LeafDirective;
      const path: string | undefined = directive.attributes?.path;
      if (path) {
        directive.data = {
          ...directive.data,
          hName: directive.name,
          hProperties: {
            ...directive.attributes,
            decklist: decklists[path],
          },
        };
      }
    });
  };
