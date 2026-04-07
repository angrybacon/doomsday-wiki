import { join } from 'node:path';
import { makeToc, read } from '@korumite/kiwi';

import { CHAPTERS } from '@/tools/markdown/files';
import { getBanner } from '@/tools/markdown/getBanner';
import { type Chapter } from '@/tools/markdown/types';
import { remarkDecklists } from '@/tools/remark/remarkDecklists';
import { remarkMana } from '@/tools/remark/remarkMana';
import { remarkScries } from '@/tools/remark/remarkScries';
import { zChapterMatter, zMetadata } from '@/tools/z/schemas';

export const getChapter = async (
  ...crumbs: [chapter: string, slug: string]
): Promise<Chapter> => {
  const id = crumbs.join('!');
  const card = CHAPTERS.CARDS.find((card) => card.id === id);
  try {
    if (!card) throw new Error('Missing chapter card');
    const { data, ...markdown } = await read(
      card.path,
      remarkDecklists,
      remarkMana,
      remarkScries,
    );
    const matter = zChapterMatter.parse(markdown.matter);
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
