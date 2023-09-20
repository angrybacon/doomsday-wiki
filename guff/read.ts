import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Kind, type Entry } from './models';
import { walk } from './walk';

/** Regular expression to capture all headings in a Markdown buffer. */
const HEADING_RE = /^#{1,6} (?<text>.+)$/gm;

function assertKind(value: unknown): asserts value is Kind | undefined {
  if (value && !Object.keys(Kind).includes(value)) {
    throw new Error(`Unknown kind "${value}"`);
  }
}

function assertTitle(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Missing title');
  }
}

export const read = (root: string): Entry[] => {
  const files = walk(root, { extension: '.md' });
  console.info(`Parsing "${root}" (${files.length} files)...`);
  return files.map((crumbs) => {
    const path = join(root, ...crumbs);
    const buffer = readFileSync(path, 'utf8');
    const { content, data } = matter(buffer);
    const { kind, title } = data;
    try {
      assertKind(kind);
      assertTitle(title);
      const matches = [...content.matchAll(HEADING_RE)];
      const headings = matches.reduce<string[]>((accumulator, match) => {
        const heading = match.groups?.text;
        return heading ? [...accumulator, heading] : accumulator;
      }, []);
      return { kind: kind ?? null, headings, title };
    } catch (error) {
      const message = error instanceof Error ? error.message : `${error}`;
      throw new Error(`${message} in "${path}"`);
    }
  });
};
