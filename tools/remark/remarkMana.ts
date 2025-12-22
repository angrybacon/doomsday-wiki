import { type Nodes } from 'mdast';
import { type TextDirective } from 'mdast-util-directive';
import { findAndReplace } from 'mdast-util-find-and-replace';
import { type Plugin } from 'unified';

import { MANA_RE } from '@/tools/mana/constants';

/**
 * Add support for `:mana` directives.
 * Find and replace all mana patterns with proper Remark directives.
 */
export const remarkMana: Plugin = () => (tree) =>
  findAndReplace(tree as Nodes, [
    MANA_RE,
    (_match, value) =>
      ({
        attributes: { pattern: value },
        children: [{ type: 'text', value }],
        name: 'mana',
        type: 'textDirective',
      }) satisfies TextDirective,
  ]);
