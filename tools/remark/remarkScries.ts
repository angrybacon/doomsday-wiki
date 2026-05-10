import { type ScrySingleResponse } from '@korumite/scrydrop';
import { type Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { type Plugin } from 'unified';
import { visit } from 'unist-util-visit';

import { scry } from '@/tools/scryfall/scry';

/**
 * Find card names and augment the tree with the corresponding Scryfall data.
 *
 * Look for directives where cards are referred by name and make a dictionary of
 * query results under the `scries` property for further reference.
 */
export const remarkScries: Plugin<[], Root> = () => async (tree, file) => {
  const promises: Promise<ScrySingleResponse>[] = [];
  const scries: Record<string, ScrySingleResponse> = {};
  const queries: string[] = [];

  visit(
    tree,
    [
      { name: 'feature', type: 'containerDirective' },
      { name: 'row', type: 'containerDirective' },
    ],
    (node) => {
      if (node.type === 'containerDirective' && node.name === 'feature') {
        const query = node.attributes?.banner?.trim();
        if (query) queries.push(query);
      }

      if (node.type === 'containerDirective' && node.name === 'row') {
        const text = toString(node).trim();
        if (text) queries.push(...text.split('\n').map((it) => it.trim()));
      }
    },
  );

  queries.forEach((query) => {
    const promise = scry(query).then((it) => (scries[query] = it));
    promises.push(promise);
  });

  await Promise.all(promises);
  file.data.scries = scries;
};
