import type { ReadPlugin } from '@korumite/kiwi';
import type { Decklists } from '~/tools/decklists/types';

import { visit } from 'unist-util-visit';

import { getDecklist } from '~/tools/decklists/getDecklist';

/** Preliminary visit to extract the required decklists */
export const remarkDecklists: ReadPlugin = () => (tree, file) => {
  const tests = [{ name: 'decklist', type: 'leafDirective' }];
  const decklists: Decklists = {};
  visit(tree, tests, (node) => {
    const url = node.attributes?.url;
    if (!url) throw new Error('Missing "url" for decklist');
    decklists[url] = getDecklist(...url.split('/'));
  });
  Object.assign(file.data, { decklists });
};
