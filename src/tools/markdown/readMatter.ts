import type { ArticleMatter, ChapterMatter } from '@/tools/markdown/types';
import {
  sanitizeArticleKind,
  sanitizeArticleTags,
  sanitizeAuthors,
  sanitizeBanner,
  sanitizeOrder,
  sanitizeTitle,
} from '@/tools/markdown/sanitize';

type ReadMatter<M> = (data: Record<string, unknown>) => M;

export const readArticleMatter: ReadMatter<ArticleMatter> = (data) => ({
  authors: sanitizeAuthors(data.authors),
  banner: sanitizeBanner(data.banner),
  kind: sanitizeArticleKind(data.kind),
  tags: sanitizeArticleTags(data.tags),
  title: sanitizeTitle(data.title),
});

export const readChapterMatter: ReadMatter<ChapterMatter> = (data) => ({
  order: data.order === undefined ? null : sanitizeOrder(data.order),
  title: sanitizeTitle(data.title),
});
