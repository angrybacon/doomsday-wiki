import { MANA_RE } from '@/tools/mana/constants';

/**
 * Find mana symbols in `text` and split them into an array of patterns.
 *
 * We assume that the match is composed of known mana symbols and that splitting
 * character by character will just work ie. no unicode.
 */
export const toArray = (text: string): string[] => {
  const matches = [...text.matchAll(MANA_RE)];
  return matches.reduce<string[]>(
    (accumulator, [, match]) => [
      ...accumulator,
      // oxlint-disable-next-line typescript/no-misused-spread
      ...(match?.toLowerCase() ?? ''),
    ],
    [],
  );
};
