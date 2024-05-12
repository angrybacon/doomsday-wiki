import { ParsedUrlQuery } from 'querystring';
import { Card, CardContent, Divider } from '@mui/material';
import {
  type GetStaticPaths,
  type GetStaticPathsResult,
  type GetStaticProps,
  type NextPage,
} from 'next';

import { Banner } from '@/components/Banner/Banner';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import { getDecklists } from '@/tools/decklists/getDecklists';
import { type Decklists } from '@/tools/decklists/types';
import { getArticleCards } from '@/tools/markdown/getArticleCards';
import { getArticle, getPartial } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import {
  type Article,
  type ArticleCard,
  type MenuEntry,
  type Partial,
} from '@/tools/markdown/types';

type Props = {
  article: Article;
  decklists: Decklists;
  footer: Partial;
  menu: MenuEntry[];
};

const ArticlePage: NextPage<Props> = ({ article, decklists, footer, menu }) => (
  <Layout menu={menu} title={article.matter.title} withBackToTop withProgress>
    <Card>
      <Banner
        banner={article.banner}
        footer={[
          `Reading time: ${article.minutes.toFixed(0)} minutes`,
          `By ${article.matter.authors}`,
        ]}
        title={article.matter.title}
      />
      <CardContent>
        <Remark decklists={decklists} markdown={article} />
      </CardContent>
      <Divider />
      <CardContent>
        <Remark decklists={decklists} markdown={footer} withScroll={false} />
      </CardContent>
    </Card>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: ArticleCard[] = await getArticleCards();
  const paths: GetStaticPathsResult['paths'] = articles.map((article) => {
    const { day, month, slug, year } = article;
    return { params: { article: slug, day, month, year } };
  });
  return { fallback: false, paths };
};

type Query = ParsedUrlQuery & {
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
      decklists: getDecklists(),
      footer: await getPartial('article-footer'),
      menu: getMenu(),
    },
  };
};

export default ArticlePage;
