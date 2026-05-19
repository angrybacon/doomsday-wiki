import { RemarkError, hastify, type ReadPlugin } from '@korumite/kiwi';
import { visit } from 'unist-util-visit';

import { type Decklists } from '@/tools/decklists/types';

/** Augment decklist directives with metadata found in `decklists` */
export const remarkDecklist: ReadPlugin<[path: string, decklists: Decklists]> =
  (path, decklists) => (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'leafDirective' || node.name !== 'decklist') return;
      const url = node.attributes?.path;
      if (!url) {
        throw new RemarkError('Missing "path" for decklist', { node, path });
      }
      if (!decklists[url]) {
        throw new RemarkError(`Missing file "${url}"`, { node, path });
      }
      hastify(node, { decklist: decklists[url] });
    });
    return tree;
  };
