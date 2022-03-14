import { join } from 'path';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { formatDate } from '@/tools/io/formatDate';
import { walk } from '@/tools/io/walk';
import {
  BASE_ARTICLE_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants/Files';
import { getBanner } from '@/tools/markdown/getBanner';
import {
  sanitizeArticleKind,
  sanitizeArticleTags,
  sanitizeBanner,
  sanitizeTitle,
} from '@/tools/markdown/sanitize';
import type { Banner, Document, Matter } from '@/tools/markdown/types';

interface GetArticlesOptions {
  ascending?: boolean;
}

type GetArticles = (options?: GetArticlesOptions) => Promise<Document[]>;

/** Read file system and return a list of all articles. */
export const getArticles: GetArticles = async (options) => {
  const { ascending } = { ascending: false, ...options };
  const reduceFunction: 'reduce' | 'reduceRight' = ascending
    ? 'reduce'
    : 'reduceRight';
  const files = Array.from(walk(BASE_ARTICLE_URL, { depth: 4 }));
  const documents = files[reduceFunction]<Document[]>((accumulator, crumbs) => {
    // TODO Warn against orphan files
    // NOTE Only consider complete paths ie. [year, month, day, article]
    if (crumbs.length === 4) {
      const path = join(BASE_ARTICLE_URL, ...crumbs) + MARKDOWN_EXTENSION;
      const { data } = readMarkdown(path);
      const [year, month, day, slug] = crumbs;
      const date = formatDate(year, month, day);
      data.banner = sanitizeBanner(data.banner, path);
      data.kind = sanitizeArticleKind(data.kind, path);
      data.tags = sanitizeArticleTags(data.tags, path);
      data.title = sanitizeTitle(data.title, path);
      const matter = { ...data, bannerData: undefined, date } as Matter;
      // @ts-expect-error Warm up promise in a temporary property.
      matter._bannerPromise = getBanner(data.banner);
      const route = ['/articles', ...crumbs].join('/');
      return [...accumulator, { crumbs, matter, route, slug }];
    }
    return accumulator;
  }, []);
  for (const document of documents) {
    let data: Banner;
    try {
      // @ts-expect-error The property has been force-added above.
      // eslint-disable-next-line no-await-in-loop
      data = await document.matter._bannerPromise;
    } catch (error) {
      const { banner } = document.matter;
      throw new Error(`Failed to scry for "${banner}" (${error})`);
    }
    // @ts-expect-error The property has been force-added above.
    delete document.matter._bannerPromise;
    document.matter.bannerData = data;
  }
  return documents;
};
