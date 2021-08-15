import { join } from 'path';
import {
  BASE_ARTICLE_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';
import { read } from '@/tools/markdown/read';
import type { Document } from '@/tools/markdown/types';
import { walk } from '@/tools/markdown/walk';

/** Default options for the `getArticles` helper. */
const getArticlesOptionsDefault: GetArticlesOptions = {
  ascending: false,
};

interface GetArticlesOptions {
  ascending?: boolean;
}

type GetArticles = (options?: GetArticlesOptions) => Document[];

/** Read file system and return a list of all articles. */
export const getArticles: GetArticles = (options) => {
  const { ascending } = { ...getArticlesOptionsDefault, ...options };
  const reduceFunction: 'reduce' | 'reduceRight' = ascending
    ? 'reduce'
    : 'reduceRight';
  const files = Array.from(walk(BASE_ARTICLE_URL, { depth: 4 }));
  const documents = files[reduceFunction]<Document[]>((accumulator, crumbs) => {
    // NOTE Only consider complete paths ie. [year, month, day, article]
    if (crumbs.length === 4) {
      const path = join(BASE_ARTICLE_URL, ...crumbs) + MARKDOWN_EXTENSION;
      let { data } = read(path);
      const [year, month, day] = crumbs;
      data = { ...data, date: `${year}-${month}-${day}` };
      const route = ['/articles', ...crumbs].join('/');
      return [...accumulator, { crumbs, data, route }];
    }
    return accumulator;
  }, []);
  return documents;
};
