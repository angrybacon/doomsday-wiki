import { DECK_RE } from '@/tools/decklists/constants';
import { toArray } from '@/tools/mana/toArray';

type Header = {
  authors?: string;
  colors: string[];
  title?: string;
};

/**
 * Parse the header of a decklist buffer.
 * It usually looks like this:
 */
export const parseHeader = (text = ''): Header => {
  const [, title, authors, colors] = text.match(DECK_RE.header) || [];
  return {
    authors: authors?.trim(),
    colors: toArray(colors?.trim()),
    title: title?.trim(),
  };
};
