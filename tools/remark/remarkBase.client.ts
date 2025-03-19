import { hastify } from '@korumite/kiwi/client';
import { type Directives } from 'mdast-util-directive';
import { visit } from 'unist-util-visit';

import { type Remarker } from '@/tools/remark/typings';

/** Preliminary visit to mark directives by name for future remarkers */
export const remarkBase: Remarker<[{ names: string[] }]> =
  ({ names }) =>
  (tree) => {
    visit(
      tree,
      (node) =>
        (node.type === 'containerDirective' ||
          node.type === 'leafDirective' ||
          node.type === 'textDirective') &&
        names.includes((node as Directives).name),
      (node) => {
        const directive = node as Directives;
        hastify(directive, directive.attributes || {});
      },
    );
    return tree;
  };
