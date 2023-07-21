import type { Root, Text } from 'mdast';
import type { ContainerDirective } from 'mdast-util-directive';
import { select } from 'unist-util-select';
import type { Plugin } from 'unified';
import type { Node } from 'unist';
import { Test, visit } from 'unist-util-visit';
import { readFaces } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import type { Scries, ScryCard, ScryData } from '@/tools/scryfall/types';

/**
 * Parse the Markdown tree and visit all Scryfall directives in order to compute
 * the queries within.
 * This Unified pluggable returns a record of queries and responses pairs.
 */
export const remarkScries: Plugin<[], Root, Scries> =
  () =>
  async (tree: Root): Promise<Scries> => {
    /** Unist tests to only visit nodes that contain Scryfall queries. */
    const tests: Test = [{ name: 'row', type: 'containerDirective' }];
    /** Contain the list of Scryfall promises to await for. */
    const promises: Promise<ScryData>[] = [];
    /** Record for query and response pairs. */
    const scries: Scries = {};
    visit<Node, Test>(tree, tests, (node) => {
      const directive = node as ContainerDirective;
      const text = select('text', directive) as Text;
      text.value.split('\n').forEach((query) => {
        const promise: Promise<ScryData> = scry(query).then(
          async (response) => {
            const cards: ScryCard[] = await readFaces(response);
            scries[query] = cards;
            return response;
          }
        );
        promises.push(promise);
      });
    });
    await Promise.all(promises);
    return scries;
  };
