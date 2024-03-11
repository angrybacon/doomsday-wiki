import { readFileSync } from 'fs';

import { parse } from '@/tools/decklists/parse';
import { type Decklist } from '@/tools/decklists/types';

/** Read file at `path` as a decklist file and return the cards found. */
export const readDecklist = (path: string): Decklist => {
  const buffer: string = readFileSync(path, 'utf8');
  return parse(buffer);
};
