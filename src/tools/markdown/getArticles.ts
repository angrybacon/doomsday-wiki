import { join } from 'path';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { formatDate } from '@/tools/io/formatDate';
import { walk } from '@/tools/io/walk';
import {
  BASE_ARTICLE_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';
import type { Document } from '@/tools/markdown/types';
import { readFirstFace } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import type { ScryData } from '@/tools/scryfall/types';

/** Default options for the `getArticles` helper. */
const getArticlesOptionsDefault: GetArticlesOptions = {
  ascending: false,
};

interface GetArticlesOptions {
  ascending?: boolean;
}

type GetArticles = (options?: GetArticlesOptions) => Promise<Document[]>;

/** Read file system and return a list of all articles. */
export const getArticles: GetArticles = async (options) => {
  const { ascending } = { ...getArticlesOptionsDefault, ...options };
  const reduceFunction: 'reduce' | 'reduceRight' = ascending
    ? 'reduce'
    : 'reduceRight';
  const files = Array.from(walk(BASE_ARTICLE_URL, { depth: 4 }));
  const documents = files[reduceFunction]<Document[]>((accumulator, crumbs) => {
    // NOTE Only consider complete paths ie. [year, month, day, article]
    if (crumbs.length === 4) {
      const path = join(BASE_ARTICLE_URL, ...crumbs) + MARKDOWN_EXTENSION;
      let { data } = readMarkdown(path);
      const [year, month, day, slug] = crumbs;
      // NOTE Warm up promise in a temporary property to be resolved later
      const _bannerPromise = data.banner ? scry(data.banner) : null;
      data = { ...data, _bannerPromise, date: formatDate(year, month, day) };
      const route = ['/articles', ...crumbs].join('/');
      return [...accumulator, { crumbs, data, route, slug }];
    }
    return accumulator;
  }, []);
  // NOTE Wait for all banner promises to resolve
  const promises = documents.reduce<(Promise<ScryData> | undefined)[]>(
    (accumulator, { data }) => [...accumulator, data?._bannerPromise],
    []
  );
  await Promise.allSettled(promises);
  // NOTE Update document with banner data in place and clean up promises
  for (const document of documents) {
    if (document.data?._bannerPromise) {
      // eslint-disable-next-line no-await-in-loop
      const data: ScryData = await document.data._bannerPromise;
      delete document.data._bannerPromise;
      const card = readFirstFace(data);
      document.data.banner = card.images.art;
      document.data.bannerArtist = document.data.banner ? card.artist : null;
      document.data.bannerName = document.data.banner ? card.name : null;
    }
  }
  return documents;
};
