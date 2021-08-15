import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { walk } from '@/tools/tree';

/** Base URL for Markdown content. */
const baseUrl = join(process.cwd(), 'markdown');

export type Slug = string[];

type GetArticles = () => Promise<Slug[]>;

export const getArticles: GetArticles = async () => {
  const path = join(baseUrl, 'articles');
  const slugs: Slug[] = [];
  for await (const it of walk(path)) {
    slugs.push(it);
  }
  return slugs;
};

export interface Markdown {
  content: string;
}

type GetMarkdown = (...slugs: string[]) => Markdown;

export const getMarkdown: GetMarkdown = (...slugs) => {
  const path = join(baseUrl, `${join(...slugs)}.mdx`);
  const buffer = fs.readFileSync(path, 'utf8');
  const { content } = matter(buffer);
  return { content };
};
