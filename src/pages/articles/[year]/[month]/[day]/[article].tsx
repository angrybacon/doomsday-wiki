import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Layout } from '@/components/Layout/Layout';
import { Title } from '@/components/Title/Title';
import { getArticles, getMarkdown } from '@/tools/markdown';
import { Article, Markdown } from '@/tools/markdown.model';

interface Props {
  markdown: Markdown;
}

const ArticlePage: NextPage<Props> = ({ markdown }) => (
  <Layout>
    <Title title={markdown?.data?.title} />
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent children={markdown.content} component={ReactMarkdown} />
        </Card>
      </Grid>
    </Grid>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: Article[] = await getArticles();
  const paths = articles.map(({ segments }) => {
    const [year, month, day, article] = segments;
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
    markdown: getMarkdown(
      'articles',
      params?.year ?? '',
      params?.month ?? '',
      params?.day ?? '',
      params?.article ?? ''
    ),
  },
});

export default ArticlePage;
