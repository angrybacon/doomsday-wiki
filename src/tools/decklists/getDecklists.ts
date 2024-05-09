import { join } from 'path';
import { walk } from '@korumite/kiwi/server';

import {
  BASE_DECKLISTS_URL,
  DECKLISTS_EXTENSION,
} from '@/tools/decklists/constants';
import { type Decklists } from '@/tools/decklists/types';
import { formatDate } from '@/tools/io/formatDate';
import { readDecklist } from '@/tools/io/readDecklist';

/** Read file system and return all decklists. */
export const getDecklists = (): Decklists => {
  const extension = DECKLISTS_EXTENSION;
  const files = walk(BASE_DECKLISTS_URL, { extension });
  const decklists = files.reduce<Decklists>((accumulator, crumbs) => {
    const slug = join(...crumbs);
    const path = join(BASE_DECKLISTS_URL, slug) + extension;
    const decklist = readDecklist(path);
    const [title, ...dateCrumbs] = crumbs.reverse();
    const date: null | string = formatDate(...dateCrumbs.reverse());
    const titleAsFile = title as string;
    return { ...accumulator, [slug]: { ...decklist, date, titleAsFile } };
  }, {});
  return decklists;
};
