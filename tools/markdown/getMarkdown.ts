import type { ScrySingleResponse } from '@korumite/scrydrop';
import type { Decklists } from '~/tools/decklists/types';

import { join } from 'node:path';
import { read } from '@korumite/kiwi';
import { cache } from 'react';

import { BASE_URLS } from '~/tools/markdown/files';
import { remarkDecklists } from '~/tools/remark/remarkDecklists';
import { remarkMana } from '~/tools/remark/remarkMana';
import { remarkScries } from '~/tools/remark/remarkScries';

/**
 * Read the Markdown content found at the provided path crumbs.
 * This handles the Markdown file extension so it should not be provided in the
 * last crumb.
 * The path is relative to the root of the project.
 */
export const getMarkdown = cache(async (...crumbs: string[]) => {
  const path = join(...crumbs);
  try {
    const { data, ...markdown } = await read(
      { crumbs, root: BASE_URLS.ROOT },
      remarkDecklists,
      remarkMana,
      remarkScries,
    );
    return {
      ...markdown,
      // oxlint-disable-next-line typescript/no-unsafe-type-assertion
      decklists: data.decklists as Decklists,
      // oxlint-disable-next-line typescript/no-unsafe-type-assertion
      scries: data.scries as Record<string, ScrySingleResponse>,
    };
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    throw new Error(`${message} in "${path}"`, { cause });
  }
});
