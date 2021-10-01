import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and split it into an array of patterns. */
export const toArray = (text: string | undefined = ''): string[] => {
  const matches = [...text.matchAll(MANA_RE)];
  return matches.map((match) => match[1].toLowerCase());
};
