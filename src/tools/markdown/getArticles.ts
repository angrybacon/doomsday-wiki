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
  const depth = 4;
  const extension = MARKDOWN_EXTENSION;
  const files = walk(BASE_ARTICLE_URL, { depth, extension });
  const { ascending } = { ascending: false, ...options };
  const bannerPromises: Promise<Banner>[] = [];
  const reduceFunction = ascending ? 'reduce' : 'reduceRight';
  const documents = files[reduceFunction]<Document[]>((accumulator, crumbs) => {
    const path = join(BASE_ARTICLE_URL, ...crumbs) + extension;
    // NOTE Only consider complete paths ie. [year, month, day, article]
    if (crumbs.length === depth) {
      const { data } = readMarkdown(path);
      data.banner = sanitizeBanner(data.banner, path);
      data.kind = sanitizeArticleKind(data.kind, path);
      data.tags = sanitizeArticleTags(data.tags, path);
      data.title = sanitizeTitle(data.title, path);
      const [year, month, day, slug] = crumbs;
      const date = formatDate(year, month, day);
      const matter = { ...data, bannerData: undefined, date } as Matter;
      const bannerPromise = getBanner(data.banner).then(
        (banner) => {
          matter.bannerData = banner;
          return banner;
        },
        (error) => {
          throw `Failed to scry banner "${matter.banner}" (${error})`;
        }
      );
      bannerPromises.push(bannerPromise);
      const route = ['/articles', ...crumbs].join('/');
      return [...accumulator, { crumbs, matter, route, slug }];
    }
    throw new Error(`Orphan file found at "${path}"`);
  }, []);
  await Promise.all(bannerPromises);
  return documents;
};
