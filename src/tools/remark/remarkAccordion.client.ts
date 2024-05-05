import { hastify } from '@korumite/kiwi/client';
import {
  type ContainerDirective,
  type LeafDirective,
} from 'mdast-util-directive';
import { type Node } from 'unist';
import { Test, visit } from 'unist-util-visit';

import { type Decklists } from '@/tools/decklists/types';
import { type Partials } from '@/tools/markdown/types';
import { Remarker } from '@/tools/remark/typings';

const remarkWithChildren = (
  directive: ContainerDirective,
  decklists: Decklists,
) => {
  const { column: c, line: l } = directive.position?.start ?? {};
  const location = `for accordion at ${l}:${c}`;
  if (!directive.children.length) {
    console.error(`[remark] Missing title ${location}`);
  } else if (directive.children.length === 1) {
    console.error(`[remark] Missing content ${location}`);
  } else {
    hastify(directive, { decklists });
  }
};

const remarkWithPartial = (
  directive: LeafDirective,
  decklists: Decklists,
  partials: Partials,
) => {
  const path = directive.attributes?.path;
  if (!path) {
    const { column: c, line: l } = directive.position?.start ?? {};
    console.error(`[remark] Missing path for accordion at ${l}:${c}`);
  } else if (!partials[path]) {
    console.error(`[remark] Missing source file for partial "${path}"`);
  } else {
    hastify(directive, { decklists, partial: partials[path] });
  }
};

/**
 * Augment the tree with content from partials for further reference while
 * rendering components.
 * The `parameters` argument is only used to pass down context for nested
 * accordions.
 */
export const remarkAccordion: Remarker<
  [{ decklists: Decklists; partials: Partials }]
> =
  ({ decklists, partials }) =>
  (tree) => {
    const tests = [
      { name: 'accordion', type: 'containerDirective' },
      { name: 'accordion', type: 'leafDirective' },
    ];
    visit<Node, Test>(tree, tests, (node) => {
      if (node.type === 'containerDirective') {
        remarkWithChildren(node as ContainerDirective, decklists);
      } else if (node.type === 'leafDirective') {
        remarkWithPartial(node as LeafDirective, decklists, partials);
      }
    });
    return tree;
  };
