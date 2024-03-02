import { type Directives } from 'mdast-util-directive';
import { type Plugin } from 'unified';
import { type Node } from 'unist';
import { Test, visit } from 'unist-util-visit';

/**
 * Preliminary visit to mark directives by name for future remarkers as well as
 * for `react-markdown`.
 */
export const remarkBase: Plugin = () => (tree) => {
  const tests = ['containerDirective', 'leafDirective', 'textDirective'];
  visit<Node, Test>(tree, tests, (node) => {
    const directive = node as Directives;
    directive.data = {
      ...directive.data,
      hName: directive.name,
      hProperties: {
        ...(directive.data?.hProperties as Record<string, unknown> | undefined),
        ...directive.attributes,
      },
    };
  });
};
