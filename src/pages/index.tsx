import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Articles } from '@/components/Articles/Articles';
import { Layout } from '@/components/Layout/Layout';
import { getArticles, getMarkdown } from '@/tools/markdown';
import { Markdown, Article } from '@/tools/markdown.model';

interface Props {
  articles: Article[];
  welcome: Markdown;
}

const HomePage: NextPage<Props> = ({ articles, welcome }) => (
  <Layout>
    <Head>
      <title>Welcome</title>
    </Head>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <CardContent component={ReactMarkdown}>{welcome.content}</CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Articles articles={articles} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: await getArticles(),
    welcome: getMarkdown('partials/welcome'),
  },
});

export default HomePage;
