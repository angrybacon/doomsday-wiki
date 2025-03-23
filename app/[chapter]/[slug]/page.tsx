import { type Metadata } from 'next';

import { Banner } from '@/components/Banner/Banner';
import { Markdown } from '@/components/Markdown/Markdown';
import { Toc } from '@/components/Toc/Toc';
import { CHAPTERS } from '@/tools/markdown/files';
import { getChapter } from '@/tools/markdown/getChapter';

export const generateMetadata = async (context: {
  params: Promise<ReturnType<typeof generateStaticParams>[number]>;
}): Promise<Metadata> => {
  const { chapter, slug } = await context.params;
  const id = [chapter, slug].join('!');
  const card = CHAPTERS.CARDS.find((card) => card.id === id);
  return card ? { title: card.title } : {};
};

export const generateStaticParams = () => CHAPTERS.ROUTES;

export default async (context: {
  params: Promise<ReturnType<typeof generateStaticParams>[number]>;
}) => {
  const { chapter, slug } = await context.params;
  const markdown = await getChapter(chapter, slug);
  return (
    <>
      <Banner
        banner={markdown.banner}
        minutes={markdown.minutes}
        title={markdown.matter.title}
        sx={{ gridArea: 'banner' }}
      />
      <Markdown markdown={markdown} sx={{ gridArea: 'content' }} />
      <Toc items={markdown.toc.items || []} sx={{ gridArea: 'toc' }} />
    </>
  );
};
