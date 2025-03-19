import { hastify } from '@korumite/kiwi/client';
import { type Root } from 'mdast';
import { visit } from 'unist-util-visit';

/** Preliminary visit to mark directives by name and skip unsupported names */
export const remarkBase =
  ({ names }: { names: string[] }) =>
  (tree: Root) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (names.includes(node.name)) {
          hastify(node, node.attributes || {});
        } else {
          node.children = [{ type: 'text', value: `:${node.name}` }];
          // NOTE I don't know how to output something that will render as a
          //      React.Fragment so a span will do for now.
          node.name = node.type === 'textDirective' ? 'span' : 'div';
          hastify(node, {});
        }
      }
    });
    return tree;
  };
