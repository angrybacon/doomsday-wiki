import { type LeafDirective } from 'mdast-util-directive';
import { type Plugin } from 'unified';
import { visit } from 'unist-util-visit';

import { getDecklist } from '@/tools/decklists/getDecklist';
import { type Decklists } from '@/tools/decklists/types';

/** Augment the tree with decklists found */
export const remarkDecklists: Plugin = () => (tree, file) => {
  const tests = [{ name: 'decklist', type: 'leafDirective' }];
  const decklists: Decklists = {};
  visit(tree, tests, (node) => {
    const directive = node as LeafDirective;
    const path = directive.attributes?.path;
    if (typeof path !== 'string') {
      throw new Error(`Invalid path for decklist "${path}"`);
    }
    decklists[path] = getDecklist(...path.split('/'));
  });
  Object.assign(file.data, { decklists });
};
