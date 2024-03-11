import { type Text } from 'mdast';
import { type ContainerDirective } from 'mdast-util-directive';
import { type Node } from 'unist';
import { select } from 'unist-util-select';
import { Test, visit } from 'unist-util-visit';

import { type Remarker } from '@/tools/remark/typings';
import { readFaces } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import { type Scries, type ScryData } from '@/tools/scryfall/types';

/**
 * Augment the tree with Scryfall responses for every queries found in the
 * content.
 */
export const remarkScries: Remarker<[], { scries: Scries }> =
  () => async (tree) => {
    const promises: Promise<ScryData>[] = [];
    const scries: Scries = {};
    const tests = [{ name: 'row', type: 'containerDirective' }];
    visit<Node, Test>(tree, tests, (node) => {
      const directive = node as ContainerDirective;
      const text = select('text', directive) as Text | undefined;
      if (text) {
        text.value.split('\n').forEach((query) => {
          const promise: Promise<ScryData> = scry(query).then(
            async (response) => {
              const cards = await readFaces(response);
              scries[query] = cards;
              return response;
            },
          );
          promises.push(promise);
        });
      } else {
        throw new Error(`Missing text for directive "${directive.name}"`);
      }
    });
    await Promise.all(promises);
    Object.assign(tree, { scries });
    return tree;
  };
