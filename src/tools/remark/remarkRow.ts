import type { Text } from 'mdast';
import type { Node } from 'unist';
import type { ContainerDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import { selectAll } from 'unist-util-select';
import { Test, visit } from 'unist-util-visit';
import type { Scries, ScryCard } from '@/tools/scryfall/types';

/**
 * Parse row directives and augment properties with Scry results for the current
 * row of cards only.
 */
export const remarkRow: Plugin<[{ scries: Scries }]> =
  ({ scries }) =>
  (tree) => {
    const test: Test = { name: 'row', type: 'containerDirective' };
    visit<Node, Test>(tree, test, (node) => {
      const directive = node as Node & ContainerDirective;
      const texts = selectAll('text', directive) as Text[];
      const cards = texts.map((text) => {
        const query: string = text.value;
        const data: ScryCard[] = scries[query];
        if (!data?.length) {
          throw new Error(`Missing Scryfall data for query "${query}"`);
        }
        return { data, id: text.position?.start.offset };
      });
      directive.data = {
        ...directive.data,
        hProperties: {
          ...(directive.data?.hProperties as Record<string, unknown>),
          cards,
        },
      };
    });
  };
