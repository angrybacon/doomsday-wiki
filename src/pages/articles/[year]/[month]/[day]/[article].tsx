import { Card, CardContent, Divider } from '@mui/material';
import { type GetStaticPaths, type GetStaticProps, type NextPage } from 'next';

import { Banner } from '@/components/Banner/Banner';
import { Layout } from '@/components/Layout/Layout';
import { Markdown } from '@/components/Markdown/Markdown';
import { ARTICLES } from '@/tools/markdown/files';
import { getArticle, getMarkdown } from '@/tools/markdown/getMarkdown';
import { MENU } from '@/tools/markdown/getMenu';
import {
  type Article,
  type MenuEntry,
  type Partial,
} from '@/tools/markdown/types';

type Props = {
  article: Article;
  footer: Partial;
  menu: MenuEntry[];
};

const Page: NextPage<Props> = ({ article, footer, menu }) => (
  <Layout menu={menu} title={article.matter.title} withBackToTop withProgress>
    <Card>
      <Banner
        banner={article.banner}
        footer={[
          `Reading time: ${article.minutes} minutes`,
          `By ${article.matter.authors}`,
        ]}
        title={article.matter.title}
      />
      <CardContent>
        <Markdown markdown={article} />
      </CardContent>
      <Divider />
      <CardContent>
        <Markdown markdown={footer} withScroll={false} />
      </CardContent>
    </Card>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: ARTICLES.ROUTES.map((route) => ({ params: route })),
});

type Query = {
  article: string;
  day: string;
  month: string;
  year: string;
};

export const getStaticProps: GetStaticProps<Props, Query> = async ({
  params,
}) => {
  const { article, day, month, year } = params as Query;
  return {
    props: {
      article: await getArticle(year, month, day, article),
      footer: await getMarkdown('partials', 'article-footer'),
      menu: MENU,
    },
  };
};

export default Page;
