import type { ScrySingleResponse } from '@korumite/scrydrop';
import type { Decklists } from '~/tools/decklists/types';

import { join } from 'node:path';
import { makeToc, read } from '@korumite/kiwi';

import { ARTICLES } from '~/tools/markdown/files';
import { getBanner } from '~/tools/markdown/getBanner';
import { remarkDecklists } from '~/tools/remark/remarkDecklists';
import { remarkMana } from '~/tools/remark/remarkMana';
import { remarkScries } from '~/tools/remark/remarkScries';

export const getArticle = async (
  ...crumbs: [year: string, month: string, day: string, article: string]
) => {
  const id = crumbs.join('!');
  const card = ARTICLES.CARDS.find((it) => it.id === id);
  try {
    if (!card) throw new Error('Missing article card');
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
