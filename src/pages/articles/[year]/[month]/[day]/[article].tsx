import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Layout } from '@/components/Layout/Layout';
import { getArticles, getMarkdown } from '@/tools/markdown';
import { Article, Markdown } from '@/tools/markdown.model';

const ArticlePage: NextPage<Markdown> = ({ content }) => (
  <>
    <Head>
      <title>Article</title>
    </Head>
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent children={content} component={ReactMarkdown} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: Article[] = await getArticles();
  const paths = articles.map(({ pathTokens }) => {
    const [year, month, day, article] = pathTokens;
    return { params: { year, month, day, article } };
  });
  return { fallback: false, paths };
};

interface Query extends ParsedUrlQuery {
  article: string;
  day: string;
  month: string;
  year: string;
}

export const getStaticProps: GetStaticProps<Markdown, Query> = async ({
  params,
}) => ({
  props: getMarkdown(
    'articles',
    params!.year,
    params!.month,
    params!.day,
    params!.article
  ),
});

export default ArticlePage;
