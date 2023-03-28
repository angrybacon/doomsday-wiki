import type { ContainerDirective, LeafDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import type { Node } from 'unist';
import { Test, visit } from 'unist-util-visit';
import type { Decklists } from '@/tools/decklists/types';
import type { Partials } from '@/tools/markdown/types';

const remarkWithChildren = (directive: Node & ContainerDirective) => {
  const { column: c, line: l } = directive.position?.start ?? {};
  const location = `for accordion at ${l}:${c}`;
  if (!directive.children.length) {
    console.error(`[remark] Missing title ${location}`);
  } else if (directive.children.length === 1) {
    console.error(`[remark] Missing content ${location}`);
  }
};

const remarkWithPartial = (
  directive: Node & LeafDirective,
  { decklists, partials }: RemarkAccordionProps
) => {
  const path = directive.attributes?.path;
  if (!path) {
    const { column: c, line: l } = directive.position?.start ?? {};
    console.error(`[remark] Missing path for accordion at ${l}:${c}`);
  } else if (!partials[path]) {
    console.error(`[remark] Missing source file for "${path}" partial`);
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
};

interface RemarkAccordionProps {
  decklists: Decklists;
  partials: Partials;
}

/**
 * Augment targets with content from partials for further reference while
 * rendering components.
 * The `props` argument is only used to pass down context for nested accordions.
 */
export const remarkAccordion: Plugin<[RemarkAccordionProps]> =
  (props) => (tree) => {
    const tests: Test = [
      { name: 'accordion', type: 'containerDirective' },
      { name: 'accordion', type: 'leafDirective' },
    ];
    visit<Node, Test>(tree, tests, (node) => {
      if (node.type === 'leafDirective') {
        remarkWithPartial(node as LeafDirective, props);
      } else if (node.type === 'containerDirective') {
        remarkWithChildren(node as ContainerDirective);
      }
    });
  };
