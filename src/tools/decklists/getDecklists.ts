import { join } from 'path';
import {
  BASE_DECKLISTS_URL,
  DECKLISTS_EXTENSION,
} from '@/tools/decklists/constants';
import type { Decklist, Decklists } from '@/tools/decklists/types';
import { formatDate } from '@/tools/io/formatDate';
import { readDecklist } from '@/tools/io/readDecklist';
import { walk } from '@/tools/io/walk';

type GetDecklists = () => Decklists;

/** Read file system and return all decklists. */
export const getDecklists: GetDecklists = () => {
  const files = Array.from(
    walk(BASE_DECKLISTS_URL, { extension: DECKLISTS_EXTENSION })
  );
  const decklists = files.reduce<Decklists>((accumulator, crumbs) => {
    const slug = join(...crumbs);
    const path = join(BASE_DECKLISTS_URL, slug) + DECKLISTS_EXTENSION;
    const decklist: Decklist = readDecklist(path);
    const [titleAsFile, ...dateCrumbs] = crumbs.reverse();
    const date: null | string = formatDate(...dateCrumbs.reverse());
    return {
      ...accumulator,
      [slug]: { ...decklist, date, titleAsFile },
    };
  }, {});
  return decklists;
};
