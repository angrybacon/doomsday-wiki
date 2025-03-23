import { Box } from '@mui/material';
import { type Metadata } from 'next';

import { Banner } from '@/components/Banner/Banner';
import { Divider } from '@/components/Divider/Divider';
import { Markdown } from '@/components/Markdown/Markdown';
import { Toc } from '@/components/Toc/Toc';
import { ARTICLES } from '@/tools/markdown/files';
import { getArticle } from '@/tools/markdown/getArticle';
import { getMarkdown } from '@/tools/markdown/getMarkdown';

export const generateMetadata = async (context: {
  params: Promise<ReturnType<typeof generateStaticParams>[number]>;
}): Promise<Metadata> => {
  const { day, month, slug, year } = await context.params;
  const id = [year, month, day, slug].join('!');
  const card = ARTICLES.CARDS.find((card) => card.id === id);
  return card ? { title: card.title } : {};
};

export const generateStaticParams = () => ARTICLES.ROUTES;

export default async (context: {
  params: Promise<ReturnType<typeof generateStaticParams>[number]>;
}) => {
  const { day, month, slug, year } = await context.params;
  const markdown = await getArticle(year, month, day, slug);
  const footer = await getMarkdown('partials', 'article-footer');
  return (
    <>
      <Banner
        author={markdown.matter.authors}
        banner={markdown.banner}
        minutes={markdown.minutes}
        title={markdown.matter.title}
        sx={{ gridArea: 'banner' }}
      />
      <Box sx={{ display: 'grid', gap: 3, gridArea: 'content' }}>
        <Markdown markdown={markdown} />
        <Divider />
        <Markdown markdown={footer} />
      </Box>
      <Toc items={markdown.toc.items || []} sx={{ gridArea: 'toc' }} />
    </>
  );
};
