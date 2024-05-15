import { hastify } from '@korumite/kiwi/client';
import { type Text } from 'mdast';
import { type ContainerDirective } from 'mdast-util-directive';
import { type Node } from 'unist';
import { select } from 'unist-util-select';
import { visit, type Test } from 'unist-util-visit';

import { type Remarker } from '@/tools/remark/typings';
import { type Scries } from '@/tools/scryfall/types';

/** Augment row directives with metadata found in `scries. */
export const remarkRow: Remarker<[{ scries: Scries }]> =
  ({ scries }) =>
  (tree) => {
    const tests = [{ name: 'row', type: 'containerDirective' }];
    visit<Node, Test>(tree, tests, (node) => {
      const directive = node as ContainerDirective;
      const text = select('text', directive) as Text | undefined;
      if (text) {
        const row = text.value.split('\n').map((query, index) => {
          const data = scries[query];
          if (!data?.length) {
            console.error(
              `[remark] Missing Scryfall data for query "${query}"`,
            );
          }
          return { data, id: `${text.position?.start.offset}-${index}` };
        });
        // NOTE The `hast` library does not JSON-encode flat arrays
        hastify(directive, { row: { cards: row } });
      } else {
        console.error(
          `[remark] Missing text for directive "${directive.name}"`,
        );
      }
    });
    return tree;
  };
