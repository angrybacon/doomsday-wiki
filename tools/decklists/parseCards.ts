import type { Card } from '~/tools/decklists/types';

import { DECK_RE } from '~/tools/decklists/constants';

const parseCard = (text: string): [quantity: number, name: string] | null => {
  const [, quantity, name] = text.match(DECK_RE.card) ?? [];
  if (quantity === undefined || name === undefined) return null;
  return [Math.trunc(Number(quantity)), name];
};

/**
 * Parse a body of lines representing cards in a decklist.
 * Empty lines found within the body will serve as delimiters for groups in
 * order to accomodate for multi-column rendering.
 */
export const parseCards = (
  text: string,
): { cards: Card[][]; count: number } => {
  let count = 0;
  const cards = text
    .split(DECK_RE.groupDelimiter)
    .map((group) => group.match(DECK_RE.line))
    .filter((group): group is RegExpMatchArray => !!group)
    .map((group) => {
      const results: Card[] = [];
      for (const row of group) {
        const card = parseCard(row);
        if (!card) continue;
        count += card[0];
        results.push(card);
      }
      return results;
    });
  return { cards, count };
};
