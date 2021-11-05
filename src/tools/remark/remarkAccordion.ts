import type { LeafDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import { Node, Test, visit } from 'unist-util-visit';
import type { Decklists } from '@/tools/decklists/types';
import type { Partials } from '@/tools/markdown/types';

/**
 * Augment targets with content from partials for further reference while
 * rendering components.
 * The `decklists` property is only passed down for nested accodions.
 */
export const remarkAccordion: Plugin<
  [{ decklists: Decklists; partials: Partials }]
> =
  ({ decklists, partials }) =>
  (tree) => {
    const test: Test = { name: 'accordion', type: 'leafDirective' };
    visit<Node, Test>(tree, test, (node) => {
      const directive = node as LeafDirective;
      const path: string | undefined = directive.attributes?.path;
      if (!path) {
        const { column: c, line: l } = directive.position?.start ?? {};
        throw Error(`Missing path in accordion directive at ${l}:${c}`);
      } else if (!partials[path]) {
        throw Error(`Missing Markdown file for '${path}' partial`);
      }
      if (!directive.children.length) {
        console.error(
          `[remark] Missing title for accordion directive '${path}'`
        );
      }
      directive.data = {
        ...directive.data,
        hProperties: {
          ...(directive.data?.hProperties as Record<string, unknown>),
          decklists,
          markdown: partials[path],
          partials,
        },
      };
    });
  };
