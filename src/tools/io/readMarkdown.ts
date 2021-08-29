import { readFileSync } from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';

type ReadMarkdown = (path: string) => GrayMatterFile<string>;

/** Read file at `path` as Markdown and return the matter found. */
export const readMarkdown: ReadMarkdown = (path) => {
  const buffer: string = readFileSync(path, 'utf8');
  return matter(buffer);
};
