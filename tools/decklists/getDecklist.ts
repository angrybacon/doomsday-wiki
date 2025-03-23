import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { parse } from '@/tools/decklists/parse';
import { type Decklist, type DecklistExtra } from '@/tools/decklists/types';
import { formatDate } from '@/tools/io/formatDate';

/** Base file URL for decklists */
const BASE_URL = join(process.cwd(), 'decklists');

/** Read decklist file found at the path crumbs */
export const getDecklist = (...crumbs: string[]): Decklist & DecklistExtra => {
  const path = join(BASE_URL, ...crumbs) + '.txt';
  const decklist = parse(readFileSync(path, 'utf8'));
  const [title, ...dateCrumbs] = crumbs.reverse();
  const dateFromPath: null | string = formatDate(...dateCrumbs.reverse());
  return { ...decklist, dateFromPath, titleFromPath: title as string };
};
