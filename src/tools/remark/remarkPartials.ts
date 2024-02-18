import { type LeafDirective } from 'mdast-util-directive';
import { type Node } from 'unist';
import { Test, visit } from 'unist-util-visit';

import { type Partial, type Partials } from '@/tools/markdown/types';
import { type Remarker } from '@/tools/remark/typings';

/**
 * Augment the tree with content from partials for further reference while
 * rendering components.
 */
export const remarkPartials: Remarker<
  { partials: Partials },
  [getMarkdownPartial: (path: string) => Promise<Partial>]
> = (getMarkdownPartial) => async (tree) => {
  const promises: Promise<Partial>[] = [];
  const partials: Partials = {};
  const tests = [{ name: 'accordion', type: 'leafDirective' }];
  visit<Node, Test>(tree, tests, (node) => {
    const directive = node as LeafDirective;
    const path = directive.attributes?.path;
    if (!path) {
      const { column: c, line: l } = directive.position?.start ?? {};
      throw new Error(`Missing path for accordion at ${l}:${c}`);
    } else {
      const promise = getMarkdownPartial(path).then(
        (response) => {
          partials[path] = response;
          return response;
        },
        (error) => {
          throw error;
        },
      );
      promises.push(promise);
    }
  });
  await Promise.all(promises);
  Object.assign(tree, { partials });
  return tree;
};
