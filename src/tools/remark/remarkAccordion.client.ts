import { hastify } from '@korumite/kiwi/client';
import { type ContainerDirective } from 'mdast-util-directive';
import { type Node } from 'unist';
import { Test, visit } from 'unist-util-visit';

import { type Decklists } from '@/tools/decklists/types';
import { Remarker } from '@/tools/remark/typings';

/**
 * Augment accordion tree with data necessary to render the collapsible
 * components.
 */
export const remarkAccordion: Remarker<[{ decklists: Decklists }]> =
  ({ decklists }) =>
  (tree) => {
    const tests = [{ name: 'accordion', type: 'containerDirective' }];
    visit<Node, Test>(tree, tests, (node) => {
      const directive = node as ContainerDirective;
      const { column: c, line: l } = directive.position?.start ?? {};
      const location = `for accordion at ${l}:${c}`;
      if (!directive.children.length) {
        console.error(`[remark] Missing title ${location}`);
      } else if (directive.children.length === 1) {
        console.error(`[remark] Missing content ${location}`);
      } else {
        hastify(directive, { decklists });
      }
    });
    return tree;
  };
