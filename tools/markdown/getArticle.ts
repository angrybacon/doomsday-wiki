import { join } from 'node:path';
import { makeToc, read } from '@korumite/kiwi';

import { ARTICLES } from '@/tools/markdown/files';
import { getBanner } from '@/tools/markdown/getBanner';
import { type Article } from '@/tools/markdown/types';
import { remarkDecklists } from '@/tools/remark/remarkDecklists';
import { remarkMana } from '@/tools/remark/remarkMana';
import { remarkScries } from '@/tools/remark/remarkScries';
import { zArticleMatter, zMetadata } from '@/tools/z/schemas';

export const getArticle = async (
  ...crumbs: [year: string, month: string, day: string, article: string]
): Promise<Article> => {
  const id = crumbs.join('!');
  const card = ARTICLES.CARDS.find((card) => card.id === id);
  try {
    if (!card) throw new Error('Missing article card');
    const { data, ...markdown } = await read(
      card.path,
      remarkDecklists,
      remarkMana,
      remarkScries,
    );
    const matter = zArticleMatter.parse(markdown.matter);
    return {
      ...markdown,
      ...zMetadata.parse(data),
      banner: await getBanner(matter.banner),
      matter,
      toc: makeToc(markdown.text, { maxDepth: 3, minDepth: 2 }),
    };
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    throw new Error(`${message} in "${join(...crumbs)}"`, { cause });
  }
};
