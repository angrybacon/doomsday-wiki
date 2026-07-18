import type { Decklist, DecklistExtra } from '~/tools/decklists/types';

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { parse } from '~/tools/decklists/parse';
import { formatDate } from '~/tools/io/formatDate';

/** Base file URL for decklists */
const BASE_URL = join(process.cwd(), 'decklists');

/** Read decklist file found at the path crumbs */
export const getDecklist = (...crumbs: string[]): Decklist & DecklistExtra => {
  const path = join(BASE_URL, ...crumbs) + '.txt';
  const decklist = parse(readFileSync(path, 'utf8'));
  const [title, ...dateCrumbs] = crumbs.toReversed();
  if (!title) throw new Error('Misplaced decklist file somehow');
  const dateFromPath: null | string = formatDate(...dateCrumbs.toReversed());
  return { ...decklist, dateFromPath, titleFromPath: title };
};
