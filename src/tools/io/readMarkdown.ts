import { readFileSync } from 'fs';
import matter from 'gray-matter';

/** Read file at `path` as Markdown and return the matter found. */
export const readMarkdown = (
  path: string,
): { content: string; data: Record<string, unknown> } => {
  const buffer: string = readFileSync(path, 'utf8');
  const { content, data } = matter(buffer);
  return { content, data };
};
