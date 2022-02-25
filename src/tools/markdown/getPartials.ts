import { join } from 'path';
import { walk } from '@/tools/io/walk';
import { Markdown, Partials } from '@/tools/markdown/types';
import {
  BASE_PARTIALS_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';
import { getMarkdown } from '@/tools/markdown/getMarkdown';

type GetPartials = () => Promise<Partials>;

/**
 * Read file system and return all Markdown partials.
 * Parse each resource using `getMarkdown`.
 */
export const getPartials: GetPartials = async () => {
  const files = Array.from(
    walk(BASE_PARTIALS_URL, { extension: MARKDOWN_EXTENSION })
  );
  // NOTE Collect all partial promises
  const promises: Record<string, Promise<Markdown>> = files.reduce<
    Record<string, Promise<Markdown>>
  >((accumulator, crumbs) => {
    const path = join(...crumbs);
    return { ...accumulator, [path]: getMarkdown(path, BASE_PARTIALS_URL) };
  }, {});
  // NOTE Await promise successes and build the record of partials
  await Promise.all(Object.values(promises));
  const partials: Partials = {};
  Object.entries(promises).forEach(async ([key, promise]) => {
    partials[key] = await Promise.resolve(promise);
  });
  return partials;
};
