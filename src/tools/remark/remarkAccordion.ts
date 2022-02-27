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
      if (!directive.children.length) {
        console.error(
          `[remark] Missing 'title' attribute for accordion "${path}"`
        );
      }
      if (!path) {
        const { column: c, line: l } = directive.position?.start ?? {};
        console.error(
          `[remark] Missing 'path' attribute in accordion at ${l}:${c}`
        );
      } else if (!partials[path]) {
        console.error(
          `[remark] Missing Markdown source file for "${path}" partial`
        );
      } else {
        directive.data = {
          ...directive.data,
          hProperties: {
            ...(directive.data?.hProperties as Record<string, unknown>),
            decklists,
            markdown: partials[path],
            partials,
          },
        };
      }
    });
  };
