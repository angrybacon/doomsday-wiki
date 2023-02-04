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
import { getArticles } from '@/tools/markdown/getArticles';
import { getMarkdown, getMarkdownPartial } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Document, Markdown, Menu } from '@/tools/markdown/types';

interface Props {
  decklists: Decklists;
  footer: Markdown;
  markdown: Markdown;
  menu: Menu;
}

const ArticlePage: NextPage<Props> = ({
  decklists,
  footer,
  markdown,
  menu,
}) => {
  const { matter } = markdown;
  const { authors, bannerData, title } = matter;

  if (!bannerData || !title) return null;

  return (
    <Layout menu={menu} title={title} withBackToTop withProgress>
      <Card>
        <Banner authors={authors} banner={bannerData} title={title} />
        <CardContent>
          <Remark decklists={decklists} markdown={markdown} />
        </CardContent>
        <Divider />
        <CardContent>
          <Remark decklists={decklists} markdown={footer} />
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: Document[] = await getArticles();
  const paths: GetStaticPathsResult['paths'] = articles.map(({ crumbs }) => {
    const [year, month, day, article] = crumbs;
    return { params: { article, day, month, year } };
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
      decklists: getDecklists(),
      footer: await getMarkdownPartial({ path: 'article-footer' }),
      markdown: await getMarkdown({
        path: join('articles', year, month, day, article),
      }),
      menu: getMenu(),
    },
  };
};

export default ArticlePage;
