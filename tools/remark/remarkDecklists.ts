import type { ReadPlugin } from '@korumite/kiwi';
import type { Decklists } from '~/tools/decklists/types';

import { visit } from 'unist-util-visit';

import { getDecklist } from '~/tools/decklists/getDecklist';

/** Preliminary visit to extract the required decklists */
export const remarkDecklists: ReadPlugin = () => (tree, file) => {
  const tests = [{ name: 'decklist', type: 'leafDirective' }];
  const decklists: Decklists = {};
  visit(tree, tests, (node) => {
    const path = node.attributes?.path;
    if (!path) throw new Error('Missing "path" for decklist');
    decklists[path] = getDecklist(...path.split('/'));
  });
  Object.assign(file.data, { decklists });
};
