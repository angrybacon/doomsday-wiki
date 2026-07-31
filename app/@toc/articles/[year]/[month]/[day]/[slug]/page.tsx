import { Toc } from '~/components/Toc/Toc';
import { ARTICLES } from '~/tools/markdown/files';
import { getArticle } from '~/tools/markdown/getArticle';

export const generateStaticParams = () => ARTICLES.ROUTES;

export default async (context: {
  params: Promise<ReturnType<typeof generateStaticParams>[number]>;
}) => {
  const { day, month, slug, year } = await context.params;
  const { toc } = await getArticle(year, month, day, slug);
  return <Toc toc={toc} />;
};
