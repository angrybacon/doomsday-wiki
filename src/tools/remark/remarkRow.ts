import type { Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import { selectAll } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';
import type { Remarker } from '@/tools/remark/types';
import type { Scries } from '@/tools/scryfall/types';

/**
 * Parse row directives and augment properties with Scry results for the current
 * row of cards only.
 */
export const remarkRow: Remarker<{ scries: Scries }> =
  ({ scries }) =>
  () =>
  (tree) => {
    const test: Test = { name: 'row', type: 'containerDirective' };
    visit<Node, Test>(tree, test, (node) => {
      const directive = node as ContainerDirective;
      const texts = selectAll('text', directive) as Text[];
      const cards = texts.map((text) => ({
        // NOTE Scry results can contain be a list in case of non-exact matches
        data: scries[text.value].data?.[0] || scries[text.value],
        id: text.position?.start.offset,
        query: text.value,
      }));
      // NOTE Augment tree properties with card meta data
      directive.data = {
        ...directive.data,
        hProperties: {
          ...(directive.data?.hProperties as Record<string, unknown>),
          cards,
        },
      };
    });
  };
