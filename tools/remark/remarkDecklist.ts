import { hastify } from '@korumite/kiwi';
import { type Root } from 'mdast';
import { type Plugin } from 'unified';
import { visit } from 'unist-util-visit';

import { type Decklists } from '@/tools/decklists/types';
import { RemarkError } from '@/tools/remark/RemarkError';

/** Augment decklist directives with metadata found in `decklists` */
export const remarkDecklist: Plugin<
  [path: string, decklists: Decklists],
  Root
> = (path, decklists) => (tree) => {
  visit(tree, (node) => {
    if (node.type !== 'leafDirective' || node.name !== 'decklist') return;
    const url = node.attributes?.path;
    if (url) {
      if (!decklists[url]) {
        throw new RemarkError(`Missing file "${url}"`, { node, path });
      }
      hastify(node, { decklist: decklists[url] });
    } else {
      throw new RemarkError('Missing decklist "path"', { node, path });
    }
  });
  return tree;
};
