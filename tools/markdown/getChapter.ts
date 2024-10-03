import { read } from '@korumite/kiwi/server';

import { CHAPTERS } from '@/tools/markdown/files';
import { getBanner } from '@/tools/markdown/getBanner';
import { type Chapter } from '@/tools/markdown/types';
import { remarkDecklists } from '@/tools/remark/remarkDecklists.server';
import { remarkMana } from '@/tools/remark/remarkMana.server';
import { remarkScries } from '@/tools/remark/remarkScries.server';
import { zChapterMatter, zMetadata } from '@/tools/z/schemas';

export const getChapter = async (
  ...crumbs: [chapter: string, slug: string]
): Promise<Chapter> => {
  const id = crumbs.join('!');
  const card = CHAPTERS.CARDS.find((card) => card.id === id);
  try {
    if (!card) throw new Error('Missing chapter card');
    const { data, ...markdown } = await read(
      [card.path],
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
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    throw new Error(`${message} in "${id}"`);
  }
};
