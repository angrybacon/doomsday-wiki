import type { Root } from 'mdast';
import type { LeafDirective } from 'mdast-util-directive';
import type { Plugin } from 'unified';
import type { Node } from 'unist';
import { Test, visit } from 'unist-util-visit';
import type { GetMarkdownPartial } from '@/tools/markdown/getMarkdown';
import type { Markdown, Partials } from '@/tools/markdown/types';

type RemarkPartialsParameters = [getMarkdownPartial: GetMarkdownPartial];

/**
 * Augment targets with content from partials for further reference while
 * rendering components.
 * The `props` argument is only used to pass down context for nested accordions.
 */
export const remarkPartials: Plugin<RemarkPartialsParameters, Root, Partials> =
  (getMarkdownPartial) => async (tree: Root) => {
    const tests: Test = [{ name: 'accordion', type: 'leafDirective' }];
    const promises: Promise<Markdown>[] = [];
    const partials: Partials = {};
    visit<Node, Test>(tree, tests, (node) => {
      const directive = node as Node & LeafDirective;
      const path = directive.attributes?.path;
      if (!path) {
        const { column: c, line: l } = directive.position?.start ?? {};
        throw new Error(`Missing path for accordion at ${l}:${c}`);
      } else {
        const promise = getMarkdownPartial({ path }).then(
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
