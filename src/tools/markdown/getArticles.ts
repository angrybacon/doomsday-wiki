import { readFileSync } from 'fs';
import { join } from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { Article } from '@/tools/markdown/types';
import {
  BASE_ARTICLE_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';
import { walk } from '@/tools/markdown/walk';

/** Default options for the `getArticles` helper. */
const getArticlesOptionsDefault: GetArticlesOptions = {
  ascending: false,
};

interface GetArticlesOptions {
  ascending?: boolean;
}

type GetArticles = (options?: GetArticlesOptions) => Article[];

/** Read file system and return a list of all articles. */
export const getArticles: GetArticles = (options) => {
  const { ascending } = { ...getArticlesOptionsDefault, ...options };
  const reduceFunction: 'reduce' | 'reduceRight' = ascending
    ? 'reduce'
    : 'reduceRight';
  const files = Array.from(walk(BASE_ARTICLE_URL, MARKDOWN_EXTENSION));
  const articles = files[reduceFunction]<Article[]>((accumulator, segments) => {
    // NOTE Only consider complete paths ie. [year, month, day, article]
    if (segments.length === 4) {
      const path: string =
        join(BASE_ARTICLE_URL, ...segments) + MARKDOWN_EXTENSION;
      const buffer: string = readFileSync(path, 'utf8');
      const { data }: GrayMatterFile<string> = matter(buffer);
      const [year, month, day] = segments;
      return [
        ...accumulator,
        {
          data: { ...data, date: `${year}-${month}-${day}` },
          route: ['/articles', ...segments].join('/'),
          segments,
        },
      ];
    }
    return accumulator;
  }, []);
  return articles;
};
