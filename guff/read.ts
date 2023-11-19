import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { KINDS, type Entry, type Kind } from './models';
import { walk } from './walk';

/** Regular expression to capture all headings in a Markdown buffer. */
const HEADING_RE = /^#{1,6} (?<text>.+)$/gm;

/** List of headings to skip. */
const HEADING_BL: readonly string[] = [
  'closing thoughts',
  'closing words',
  'conclusion',
  'final thoughts',
  'introduction',
  'next steps',
  'preamble',
  'preface',
  'table of contents',
];

function assertKind(value: unknown): asserts value is Kind | undefined {
  if (value && !Object.values(KINDS).includes(value)) {
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
      let headings: string[] = [];
      // NOTE Skip reports as they tend to have headings that are too generic
      if (kind !== KINDS.report) {
        const matches = [...content.matchAll(HEADING_RE)];
        headings = matches.reduce<string[]>((accumulator, match) => {
          const heading = match.groups?.text;
          return heading && !HEADING_BL.includes(heading.toLowerCase())
            ? [...accumulator, heading]
            : accumulator;
        }, []);
      }
      return { kind: kind ?? null, headings, title };
    } catch (error) {
      const message = error instanceof Error ? error.message : `${error}`;
      throw new Error(`${message} in "${path}"`);
    }
  });
};
