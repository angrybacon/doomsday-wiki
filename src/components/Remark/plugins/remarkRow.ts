import type { Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import { selectAll } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';
import type { ScryData } from '@/tools/scryfall/types';

type RemarkRow = (context: { scries: Record<string, ScryData> }) => Plugin;

export const remarkRow: RemarkRow =
  ({ scries }) =>
  () =>
  (tree) => {
    visit<Node, Test>(tree, 'containerDirective', (node) => {
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
