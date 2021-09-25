import type { Directive } from 'mdast-util-directive';
import { Node, Test, visit } from 'unist-util-visit';
import type { Remarker } from '@/tools/remark/types';

/**
 * Preliminary visit to mark directives by name for future remarkers as well as
 * for `ReactMarkdown`.
 */
export const remarkBase: Remarker = () => () => (tree) => {
  const tests: Test = ['containerDirective', 'leafDirective', 'textDirective'];
  visit<Node, Test>(tree, tests, (node) => {
    const directive = node as Directive;
    directive.data = {
      ...directive.data,
      hName: directive.name,
      hProperties: directive.attributes,
    };
  });
};
