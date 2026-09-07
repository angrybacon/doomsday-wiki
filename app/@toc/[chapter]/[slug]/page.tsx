import { Toc } from '~/components/Toc/Toc';
import { CHAPTERS } from '~/tools/markdown/files';
import { getChapter } from '~/tools/markdown/getChapter';

export const generateStaticParams = () => CHAPTERS.ROUTES;

export default async (context: {
  params: Promise<ReturnType<typeof generateStaticParams>[number]>;
}) => {
  const { chapter, slug } = await context.params;
  const { toc } = await getChapter(chapter, slug);
  return <Toc toc={toc} />;
};
