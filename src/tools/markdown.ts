import fs from 'fs';
import { join } from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { walk } from '@/tools/tree';
import { GetArticles, GetMarkdown, Article } from '@/tools/markdown.model';

/** Base URL for Markdown content. */
const baseMarkdownUrl = join(process.cwd(), 'markdown');

/** Base URL for articles. */
const baseArticleUrl = join(baseMarkdownUrl, 'articles');

/** Read file system and return a list of all articles. */
export const getArticles: GetArticles = async () => {
  const slugs: Article[] = [];
  for await (const tokens of walk(baseArticleUrl)) {
    // NOTE Filter out incomplete paths
    if (tokens.length === 4) {
      const path = ['/articles', ...tokens].join('/');
      const buffer = fs.readFileSync(join(baseMarkdownUrl, `${path}.mdx`));
      const { data }: GrayMatterFile<typeof buffer> = matter(buffer);
      slugs.push({
        path,
        pathTokens: tokens,
        title: data?.title || null,
      });
    }
  }
  return slugs;
};

/** Read file system and return Markdown matter from the specified slug. */
export const getMarkdown: GetMarkdown = (...slugs) => {
  const path = join(baseMarkdownUrl, `${join(...slugs)}.mdx`);
  const buffer: string = fs.readFileSync(path, 'utf8');
  const data: GrayMatterFile<typeof buffer> = matter(buffer);
  return { content: data.content };
};
