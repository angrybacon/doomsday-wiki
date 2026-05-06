import { hastify } from '@korumite/kiwi';
import { type ScrySingleResponse } from '@korumite/scrydrop';
import { type Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { type Plugin } from 'unified';
import { visit } from 'unist-util-visit';

/**
 * Add support for `:::row` directives.
 *
 * Bridge the pre-fetched Scryfall data in SCRIES with the card names found
 * within the directive.
 *
 * When used on a string directly where a file path cannot be inferred, use PATH
 * instead for error messages.
 */
export const remarkRow: Plugin<
  [path: string, scries: Record<string, ScrySingleResponse>],
  Root
> = (path, scries) => (tree, file) => {
  visit(tree, (node) => {
    if (
      node.type === 'containerDirective' ||
      node.type === 'leafDirective' ||
      node.type === 'textDirective'
    ) {
      if (node.name !== 'row') return;

      file.path = file.path || path;

      if (node.type === 'leafDirective') {
        file.fail(
          'Unexpected "cards" leaf directive, use three colons instead',
          node,
        );
      }

      if (node.type === 'textDirective') {
        file.fail(
          'Unexpected "cards" text directive, use three colons instead',
          node,
        );
      }

      const text = toString(node).trim();
      if (!text) file.fail('Missing items in `cards` directive', node);

      const cards = text.split('\n').map((query, index) => {
        const faces = scries[query];
        if (!faces?.length) file.fail(`Missing scry for "${query}"`, node);
        return { faces, id: `${index}-${node.position?.start.offset}` };
      });

      // NOTE The `hast` library does not JSON-encode flat arrays
      hastify(node, { payload: { cards } });
    }
  });

  return tree;
};
