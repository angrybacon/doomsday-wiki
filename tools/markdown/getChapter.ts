import type { ScrySingleResponse } from '@korumite/scrydrop';
import type { Decklists } from '@/tools/decklists/types';

import { join } from 'node:path';
import { makeToc, read } from '@korumite/kiwi';

import { CHAPTERS } from '@/tools/markdown/files';
import { getBanner } from '@/tools/markdown/getBanner';
import { remarkDecklists } from '@/tools/remark/remarkDecklists';
import { remarkMana } from '@/tools/remark/remarkMana';
import { remarkScries } from '@/tools/remark/remarkScries';

export const getChapter = async (
  ...crumbs: [chapter: string, slug: string]
) => {
  const id = crumbs.join('!');
  const card = CHAPTERS.CARDS.find((it) => it.id === id);
  try {
    if (!card) throw new Error('Missing chapter card');
    const {
      data,
      matter: _matter,
      ...markdown
    } = await read(card.path, remarkDecklists, remarkMana, remarkScries);
    return {
      ...card,
      ...markdown,
      banner: await getBanner(card.banner),
      // oxlint-disable-next-line typescript/no-unsafe-type-assertion
      decklists: data.decklists as Decklists,
      // oxlint-disable-next-line typescript/no-unsafe-type-assertion
      scries: data.scries as Record<string, ScrySingleResponse>,
      toc: makeToc(markdown.text, { maxDepth: 3, minDepth: 2 }),
    };
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    throw new Error(`${message} in "${join(...crumbs)}"`, { cause });
  }
};
