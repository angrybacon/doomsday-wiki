import { readFileSync } from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';

type ReadMarkdown = (path: string) => GrayMatterFile<string>;

/** Read file at `path` as Markdown and return the matter found. */
export const readMarkdown: ReadMarkdown = (path) => {
  const buffer: string = readFileSync(path, 'utf8');
  // NOTE Provide an empty option parameter to disable caching. The `matter`
  //      function mistakenly lowercase some fields while caching.
  return matter(buffer, {});
};
