import { type ParsedUrlQuery } from 'querystring';
import { Card, CardContent } from '@mui/material';
import { type GetStaticPaths, type GetStaticProps, type NextPage } from 'next';

import { Banner } from '@/components/Banner/Banner';
import { Layout } from '@/components/Layout/Layout';
import { Markdown } from '@/components/Markdown/Markdown';
import { CHAPTERS } from '@/routes';
import { getChapter } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import { type Chapter, type MenuEntry } from '@/tools/markdown/types';

type Props = {
  chapter: Chapter;
  menu: MenuEntry[];
};

const Page: NextPage<Props> = ({ chapter, menu }) => (
  <Layout menu={menu} title={chapter.matter.title} withBackToTop withProgress>
    <Card>
      <Banner banner={chapter.banner} title={chapter.matter.title} />
      <CardContent>
        <Markdown markdown={chapter} />
      </CardContent>
    </Card>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: CHAPTERS.ROUTES.map((route) => ({ params: route })),
});

type Query = ParsedUrlQuery & {
  category: string;
  chapter: string;
};

export const getStaticProps: GetStaticProps<Props, Query> = async ({
  params,
}) => {
  const { category, chapter } = params as Query;
  return {
    props: {
      chapter: await getChapter(category, chapter),
      menu: getMenu(),
    },
  };
};

export default Page;
