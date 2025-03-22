import { join } from 'node:path';
import { read } from '@korumite/kiwi/server';

import { BASE_URLS } from '@/tools/markdown/files';
import { type Partial } from '@/tools/markdown/types';
import { remarkDecklists } from '@/tools/remark/remarkDecklists';
import { remarkMana } from '@/tools/remark/remarkMana';
import { remarkScries } from '@/tools/remark/remarkScries';
import { zMetadata } from '@/tools/z/schemas';

/**
 * Read the Markdown content found at the provided path crumbs.
 * This handles the Markdown file extension so it should not be provided in the
 * last crumb.
 * The path is relative to the root of the project.
 */
export const getMarkdown = async (...crumbs: string[]): Promise<Partial> => {
  const id = crumbs.join('!');
  try {
    const { data, ...markdown } = await read(
      [BASE_URLS.ROOT, join(...crumbs) + '.md'],
      remarkDecklists,
      remarkMana,
      remarkScries,
    );
    return { ...markdown, ...zMetadata.parse(data), file: id };
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    throw new Error(`${message} in "${id}"`);
  }
};
