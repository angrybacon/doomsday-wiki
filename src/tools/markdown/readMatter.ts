import {
  sanitizeArticleKind,
  sanitizeArticleTags,
  sanitizeAuthors,
  sanitizeBanner,
  sanitizeOrder,
  sanitizeTitle,
} from '@/tools/markdown/sanitize';
import { type ArticleMatter, type ChapterMatter } from '@/tools/markdown/types';

type ReadMatter<M> = (data: Record<string, unknown>) => M;

export const readArticleMatter: ReadMatter<ArticleMatter> = (data) => ({
  authors: sanitizeAuthors(data.authors),
  banner: sanitizeBanner(data.banner),
  kind: sanitizeArticleKind(data.kind),
  tags: sanitizeArticleTags(data.tags),
  title: sanitizeTitle(data.title),
});

export const readChapterMatter: ReadMatter<ChapterMatter> = (data) => ({
  banner: sanitizeBanner(data.banner),
  order: data.order === undefined ? null : sanitizeOrder(data.order),
  title: sanitizeTitle(data.title),
});
