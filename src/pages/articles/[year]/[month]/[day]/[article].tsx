import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { Card, CardContent, Divider } from '@mui/material';
import { Banner } from '@/components/Banner/Banner';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import { getDecklists } from '@/tools/decklists/getDecklists';
import type { Decklists } from '@/tools/decklists/types';
import { getArticleCards } from '@/tools/markdown/getArticleCards';
import { getArticle, getPartial } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type {
  Article,
  ArticleCard,
  MenuEntry,
  Partial,
} from '@/tools/markdown/types';

interface Props {
  article: Article;
  decklists: Decklists;
  footer: Partial;
  menu: MenuEntry[];
}

const ArticlePage: NextPage<Props> = ({ article, decklists, footer, menu }) => (
  <Layout menu={menu} title={article.matter.title} withBackToTop withProgress>
    <Card>
      <Banner
        authors={article.matter.authors}
        banner={article.banner}
        title={article.matter.title}
      />
      <CardContent>
        <Remark decklists={decklists} markdown={article} />
      </CardContent>
      <Divider />
      <CardContent>
        <Remark decklists={decklists} markdown={footer} />
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

interface Query extends ParsedUrlQuery {
  article: string;
  day: string;
  month: string;
  year: string;
}

export const getStaticProps: GetStaticProps<Props, Query> = async ({
  params,
}) => {
  const { article, day, month, year } = params as Query;
  return {
    props: {
      article: await getArticle(join(year, month, day, article)),
      decklists: getDecklists(),
      footer: await getPartial('article-footer'),
      menu: getMenu(),
    },
  };
};

export default ArticlePage;
