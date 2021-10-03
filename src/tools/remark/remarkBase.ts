import type { Directive } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import { Node, Test, visit } from 'unist-util-visit';

/**
 * Preliminary visit to mark directives by name for future remarkers as well as
 * for `ReactMarkdown`.
 */
export const remarkBase: Plugin = () => (tree) => {
  const tests: Test = ['containerDirective', 'leafDirective', 'textDirective'];
  visit<Node, Test>(tree, tests, (node) => {
    const directive = node as Directive;
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
