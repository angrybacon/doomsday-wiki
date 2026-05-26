import { type ReadPlugin, type TextDirective } from '@korumite/kiwi';
import { findAndReplace } from 'mdast-util-find-and-replace';

import { MANA_RE } from '@/tools/mana/constants';

/**
 * Add support for `:mana` directives.
 *
 * Find and replace all matching mana patterns with proper Remark directives.
 */
export const remarkMana: ReadPlugin = () => (tree) =>
  findAndReplace(tree, [
    MANA_RE,
    (_match, value: string) =>
      ({
        attributes: { pattern: value },
        children: [{ type: 'text', value }],
        name: 'mana',
        type: 'textDirective',
      }) satisfies TextDirective,
  ]);
