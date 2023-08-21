import { DECK_RE } from '@/tools/decklists/constants';
import type { Card } from '@/tools/decklists/types';

const parseCard = (text: string): [quantity: number, name: string] | null => {
  const [, quantity, name] = text.match(DECK_RE.card) || [];
  if (quantity === undefined || name === undefined) return null;
  return [parseInt(quantity, 10), name];
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
    .map((group) =>
      group.reduce<Card[]>((accumulator, row) => {
        const card = parseCard(row);
        if (card) {
          count += card[0];
          return [...accumulator, card];
        }
        return accumulator;
      }, []),
    );
  return { cards, count };
};
