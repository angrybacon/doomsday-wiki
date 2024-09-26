import { read } from '@korumite/kiwi/server';

import { CHAPTERS } from '@/tools/markdown/files';
import { getBanner } from '@/tools/markdown/getBanner';
import { type Chapter } from '@/tools/markdown/types';
import { remarkDecklists } from '@/tools/remark/remarkDecklists.server';
import { remarkMana } from '@/tools/remark/remarkMana.server';
import { remarkScries } from '@/tools/remark/remarkScries.server';
import { zChapterMatter, zChapterMetadata } from '@/tools/z/schemas';

export const getChapter = async (
  chapter: string,
  slug: string,
): Promise<Chapter> => {
  try {
    const card = CHAPTERS.CARDS.find(
      (card) => card.chapter === chapter && card.slug === slug,
    );
    if (!card) throw new Error('Missing chapter card');
    const { path } = card;
    const { data, ...markdown } = await read(
      [path],
      remarkDecklists,
      remarkMana,
      remarkScries,
    );
    const matter = zChapterMatter.parse(markdown.matter);
    return {
      ...markdown,
      ...zChapterMetadata.parse(data),
      banner: await getBanner(matter.banner),
      matter,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} in ${chapter}/${slug}`);
  }
};
