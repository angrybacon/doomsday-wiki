import { type Root, type Text } from 'mdast';
import { type ContainerDirective } from 'mdast-util-directive';
import { type Plugin } from 'unified';
import { select } from 'unist-util-select';
import { visit } from 'unist-util-visit';

import { readFaces } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import { type Scries, type ScryData } from '@/tools/scryfall/types';

/**
 * Augment the tree with Scryfall responses for all queries found in content.
 *
 * Look for `row` container directives and insert the Scryfall response into the
 * tree under the `scries` property.
 */
export const remarkScries: Plugin<[], Root> = () => async (tree, file) => {
  const promises: Promise<ScryData>[] = [];
  const scries: Scries = {};
  const tests = [{ name: 'row', type: 'containerDirective' }];
  visit(tree, tests, (node) => {
    const directive = node as ContainerDirective;
    const text = select('text', directive) as Text | undefined;
    text?.value.split('\n').forEach((query) => {
      const promise = scry(query).then(async (response) => {
        scries[query] = await readFaces(response);
        return response;
      });
      promises.push(promise);
    });
  });
  await Promise.all(promises);
  Object.assign(file.data, { scries });
};
