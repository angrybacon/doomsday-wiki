import { type Text } from 'mdast';
import { type ContainerDirective } from 'mdast-util-directive';
import { type Node } from 'unist';
import { select } from 'unist-util-select';
import { Test, visit } from 'unist-util-visit';

import { type Remarker } from '@/tools/remark/typings';
import { readFaces } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import {
  type Scries,
  type ScryCard,
  type ScryData,
} from '@/tools/scryfall/types';

/**
 * Parse the Markdown tree and visit all Scryfall directives in order to compute
 * the queries within.
 * This `unified` pluggable returns a record of queries and responses pairs.
 */
export const remarkScries: Remarker<{ scries: Scries }> =
  () => async (tree) => {
    const promises: Promise<ScryData>[] = [];
    const scries: Scries = {};
    const tests = [{ name: 'row', type: 'containerDirective' }];
    visit<Node, Test>(tree, tests, (node) => {
      const directive = node as ContainerDirective;
      const text = select('text', directive) as Text;
      text.value.split('\n').forEach((query) => {
        const promise: Promise<ScryData> = scry(query).then(
          async (response) => {
            const cards: ScryCard[] = await readFaces(response);
            scries[query] = cards;
            return response;
          },
        );
        promises.push(promise);
      });
    });
    await Promise.all(promises);
    Object.assign(tree, { scries });
    return tree;
  };
