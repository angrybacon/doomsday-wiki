import { DECK_RE } from '@/tools/decklists/constants';

type Header = {
  author?: string;
  title?: string;
};

/**
 * Parse the header of a decklist buffer.
 * It usually looks like this:
 */
export const parseHeader = (text = ''): Header => {
  const [, title, author] = text.match(DECK_RE.header) || [];
  return { author, title };
};
