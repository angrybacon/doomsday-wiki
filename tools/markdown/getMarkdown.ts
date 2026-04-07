import { join } from 'node:path';
import { read } from '@korumite/kiwi';
import { cache } from 'react';

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
export const getMarkdown = cache(
  async (...crumbs: string[]): Promise<Partial> => {
    const path = join(...crumbs);
    try {
      const { data, ...markdown } = await read(
        { crumbs, root: BASE_URLS.ROOT },
        remarkDecklists,
        remarkMana,
        remarkScries,
      );
      return { ...markdown, ...zMetadata.parse(data) };
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : String(cause);
      throw new Error(`${message} in "${path}"`, { cause });
    }
  },
);
