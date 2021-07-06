import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Layout } from '@/components/Layout/Layout';
import { Markdown, getArticles, getMarkdown } from '@/tools/markdown';

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
  const articles = await getArticles();
  const paths = articles
    .filter((it) => it.length === 4) // NOTE Filter out incomplete paths
    .map(([year, month, day, slug]) => ({
      params: { year, month, day, slug },
    }));
  return { fallback: false, paths };
};

interface Query extends ParsedUrlQuery {
  day: string;
  month: string;
  slug: string;
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
    params!.slug
  ),
});

export default ArticlePage;
