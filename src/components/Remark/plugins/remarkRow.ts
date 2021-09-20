import type { Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import { selectAll } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';
import type { Scries } from '@/tools/scryfall/types';

type RemarkRow = (context: { scries: Scries }) => Plugin;

export const remarkRow: RemarkRow =
  ({ scries }) =>
  () =>
  (tree) => {
    const test: Test = { name: 'row', type: 'containerDirective' };
    visit<Node, Test>(tree, test, (node) => {
      const directive = node as ContainerDirective;
      const texts = selectAll('text', directive) as Text[];
      const cards = texts.map((text) => ({
        data: scries[text.value].data?.[0] || scries[text.value],
        id: text.position?.start.offset,
        query: text.value,
      }));
      // NOTE Augment tree properties with card meta data
      directive.data = {
        ...directive.data,
        hName: directive.name,
        hProperties: { ...directive.attributes, cards },
      };
    });
  };
