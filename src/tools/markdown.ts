import { readFileSync } from 'fs';
import { join } from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { walk } from '@/tools/tree';
import { GetArticles, GetMarkdown, Article } from '@/tools/markdown.model';

/** File extension to consider for Markdown content. */
const extension = '.mdx';

/** Base URL for Markdown content. */
const baseMarkdownUrl = join(process.cwd(), 'markdown');

/** Base URL for articles. */
const baseArticleUrl = join(baseMarkdownUrl, 'articles');

/** Read file system and return a list of all articles. */
export const getArticles: GetArticles = async () => {
  const slugs: Article[] = [];
  for await (const segments of walk(baseArticleUrl, extension)) {
    // NOTE Only consider complete paths ie. [year, month, day, article]
    if (segments.length === 4) {
      const path: string = join(baseArticleUrl, ...segments) + extension;
      const buffer: string = readFileSync(path, 'utf8');
      const { data }: GrayMatterFile<string> = matter(buffer);
      slugs.push({
        route: ['/articles', ...segments].join('/'),
        segments,
        ...(data.title && { title: data.title }),
      });
    }
  }
  return slugs;
};

/** Read file system and return Markdown matter from the specified slug. */
export const getMarkdown: GetMarkdown = (...slugs) => {
  const path: string = join(baseMarkdownUrl, ...slugs) + extension;
  const buffer: string = readFileSync(path, 'utf8');
  const { content, data }: GrayMatterFile<string> = matter(buffer);
  return { content, data };
};
