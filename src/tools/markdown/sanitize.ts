import { Kind } from '@/tools/markdown/constants/Kind';
import { Tag } from '@/tools/markdown/constants/Tag';

// TODO How about Zod?

type Sanitizer<T> = (value: unknown) => T;

/** Verify that the article kind matter property is correctly formed. */
export const sanitizeArticleKind: Sanitizer<Kind> = (value) => {
  if (!value || typeof value !== 'string') {
    throw new Error(`Missing 'kind' property`);
  }
  const kinds: string[] = Object.keys(Kind);
  if (!kinds.includes(value)) {
    const options = `['${kinds.join("', '")}']`;
    throw new Error(
      `Invalid 'kind' property. Expected one of: ${options}, got "${value}" instead`,
    );
  }
  return Kind[value as keyof typeof Kind];
};

/** Verify that the article tags are correctly formed. */
export const sanitizeArticleTags: Sanitizer<Tag[]> = (value) => {
  let result: Tag[] = [];
  if (value) {
    const tags: Tag[] = Object.values(Tag);
    const values = Array.isArray(value) ? value : [value];
    result = values.map<Tag>((tag) => {
      if (!tags.includes(tag)) {
        const options = `['${tags.join("', '")}']`;
        throw new Error(
          `Invalid 'tags' property. Expected one ${options}, got "${tag}" instead`,
        );
      }
      return tag;
    });
  }
  return result;
};

const sanitizeString = (value: unknown, message: string): string => {
  if (!value || typeof value !== 'string') {
    throw new Error(message);
  }
  return value;
};

/** Verify that the authors field is correctly formed. */
export const sanitizeAuthors: Sanitizer<string> = (value) =>
  sanitizeString(value, "Missing 'authors' property");

/** Verify that the banner matter property is correctly formed. */
export const sanitizeBanner: Sanitizer<string> = (value) =>
  sanitizeString(value, "Missing 'banner' property");

/** Verify that the order field is correctly formed. */
export const sanitizeOrder: Sanitizer<number> = (value) => {
  if (value === undefined || !Number.isInteger(value)) {
    throw new Error("Missing 'order' property");
  }
  return value as number;
};

/** Verify that the title matter property is correctly formed. */
export const sanitizeTitle: Sanitizer<string> = (value) =>
  sanitizeString(value, "Missing 'title' property");
