import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and split them into an array of patterns. */
export const toArray = (text: string): string[] => {
  const matches = [...text.matchAll(MANA_RE)];
  return matches.reduce<string[]>(
    (accumulator, [, match]) => [
      ...accumulator,
      ...(match ? match.toLowerCase() : []),
    ],
    [],
  );
};
