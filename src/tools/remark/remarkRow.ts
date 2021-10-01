import type { Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import { selectAll } from 'unist-util-select';
import { Node, Test, visit } from 'unist-util-visit';
import { readFirstFace } from '@/tools/scryfall/read';
import type { Scries, ScryDataItem } from '@/tools/scryfall/types';

/**
 * Parse row directives and augment properties with Scry results for the current
 * row of cards only.
 */
export const remarkRow: Plugin<[{ scries: Scries }]> =
  ({ scries }) =>
  (tree) => {
    const test: Test = { name: 'row', type: 'containerDirective' };
    visit<Node, Test>(tree, test, (node) => {
      const directive = node as ContainerDirective;
      const texts = selectAll('text', directive) as Text[];
      const cards = texts.map((text) => {
        let data: ScryDataItem;
        try {
          // NOTE Scry data can contain card faces
          data = readFirstFace(scries[text.value]);
        } catch {
          throw new Error(`Missing Scryfall data for query "${text.value}"`);
        }
        return { data, id: text.position?.start.offset, query: text.value };
      });
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
