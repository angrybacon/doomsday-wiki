import { DECK_RE } from '@/tools/decklists/constants';
import type { Card } from '@/tools/decklists/types';

/**
 * Parse a body of lines representing cards in a decklist.
 * Empty lines found within the body will serve as delimiters for groups in
 * order to accomodate for multi-column rendering.
 */
export const parseCards = (text: string): Card[][] =>
  text
    .split(DECK_RE.groupDelimiter)
    .map((group) => group.match(DECK_RE.line))
    .filter((group) => group)
    .map((group) =>
      (group as string[]).map((card) => {
        const [, quantity, name] = card.match(DECK_RE.card) || [];
        return [parseInt(quantity, 10), name];
      })
    );
