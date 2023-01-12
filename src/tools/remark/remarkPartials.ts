import type { Root } from 'mdast';
import type { LeafDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import { Node, Test, visit } from 'unist-util-visit';
import type { Markdown, Partials } from '@/tools/markdown/types';

/**
 * Augment targets with content from partials for further reference while
 * rendering components.
 * The `props` argument is only used to pass down context for nested accordions.
 */
export const remarkPartials: Plugin<
  [(path: string) => Promise<Markdown>],
  Root,
  Partials
> = (getMarkdownPartial) => async (tree: Root) => {
  const tests: Test = [{ name: 'accordion', type: 'leafDirective' }];
  const promises: Promise<Markdown>[] = [];
  const partials: Partials = {};
  visit<Node, Test>(tree, tests, (node) => {
    const directive = node as LeafDirective;
    const path: string | undefined = directive.attributes?.path;
    const { column: c, line: l } = directive.position?.start ?? {};
    if (!path) {
      throw new Error(`Missing path for accordion at ${l}:${c}`);
    } else {
      const promise: Promise<Markdown> = getMarkdownPartial(path).then(
        (response) => {
          partials[path] = response;
          return response;
        },
        (error) => {
          throw error;
        }
      );
      promises.push(promise);
    }
  });
  await Promise.all(promises);
  return partials;
};
