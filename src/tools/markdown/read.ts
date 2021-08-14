import { readFileSync } from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';

type Read = (path: string) => GrayMatterFile<string>;

/** Read file at `path` and return the matter found. */
export const read: Read = (path) => {
  const buffer: string = readFileSync(path, 'utf8');
  return matter(buffer);
};
