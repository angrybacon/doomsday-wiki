import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import type { ExtraPageProps } from '@/interfaces/page.model';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import type { Document, Markdown } from '@/tools/markdown/types';

interface Props {
  markdown: Markdown;
}

const ArticlePage: NextPage<Props & ExtraPageProps> = ({
  decklists,
  markdown,
  menu,
}) => (
  <Layout maxWidth="md" menu={menu} title={markdown.matter?.title}>
    <Card>
      <CardContent
        component={Remark}
        decklists={decklists}
        markdown={markdown}
      />
    </Card>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: Document[] = getArticles();
  const paths = articles.map(({ crumbs }) => {
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
}) => ({
  props: {
    markdown: await getMarkdown(
      'articles',
      params?.year ?? '',
      params?.month ?? '',
      params?.day ?? '',
      params?.article ?? ''
    ),
  },
});

export default ArticlePage;
