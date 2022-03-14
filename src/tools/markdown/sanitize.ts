import { Kind } from '@/tools/markdown/constants/Kind';
import { Tag } from '@/tools/markdown/constants/Tag';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Sanitizer<T> = (value: any, path: string) => T;

/** Verify that the article kind matter property is correctly formed. */
export const sanitizeArticleKind: Sanitizer<Kind> = (value, path) => {
  if (!value || typeof value !== 'string') {
    throw new Error(`Missing 'kind' property for article at "${path}"`);
  }
  const kinds: string[] = Object.keys(Kind);
  if (!kinds.includes(value)) {
    const kindsPretty = `['${kinds.join("', '")}']`;
    throw new Error(
      `Wrong 'kind' property for article at "${path}". Expected one of: ${kindsPretty}, got "${value}" instead`
    );
  }
  return Kind[value as keyof typeof Kind];
};

/** Verify that the article tags are correctly formed. */
export const sanitizeArticleTags: Sanitizer<Tag[]> = (value, path) => {
  let tags: Tag[] = [];
  if (value) {
    const availableTags: Tag[] = Object.values(Tag);
    const values = Array.isArray(value) ? value : [value];
    tags = values.map<Tag>((tag) => {
      if (!availableTags.includes(tag)) {
        const availableTagsPretty = `['${availableTags.join("', '")}']`;
        throw new Error(
          `Wrong 'tags' property for article at "${path}". Expected an array of tags, found "${tag}" instead. Available tags: ${availableTagsPretty}`
        );
      }
      return tag;
    });
  }
  return tags;
};

/** Verify that the banner matter property is correctly formed. */
export const sanitizeBanner: Sanitizer<string> = (value, path) => {
  if (!value || typeof value !== 'string') {
    throw new Error(`Missing 'banner' property for document at "${path}"`);
  }
  return value;
};

/** Verify that the title matter property is correctly formed. */
export const sanitizeTitle: Sanitizer<string> = (value, path) => {
  if (!value || typeof value !== 'string') {
    throw new Error(`Missing 'title' property for document at "${path}"`);
  }
  return value;
};
