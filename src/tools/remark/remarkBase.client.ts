import { type Directives } from 'mdast-util-directive';
import { type Node } from 'unist';
import { Test, visit } from 'unist-util-visit';

import { hastify } from '@/tools/remark/hastify';
import { Remarker } from '@/tools/remark/typings';

/** Preliminary visit to mark directives by name for future remarkers. */
export const remarkBase: Remarker = () => (tree) => {
  const tests = ['containerDirective', 'leafDirective', 'textDirective'];
  visit<Node, Test>(tree, tests, (node) => {
    const directive = node as Directives;
    hastify(directive, directive.attributes || {}, directive.name);
  });
  return tree;
};
