import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Articles } from '@/components/Articles/Articles';
import { Layout } from '@/components/Layout/Layout';
import { Title } from '@/components/Title/Title';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import { Markdown, Article } from '@/tools/markdown/types';

interface Props {
  articles: Article[];
  welcome: Markdown;
}

const HomePage: NextPage<Props> = ({ articles, welcome }) => (
  <Layout>
    <Title title="Welcome" />
    <Grid container spacing={2}>
      <Grid item sm={6} md={7}>
        <Card>
          <CardContent component={ReactMarkdown}>{welcome.content}</CardContent>
        </Card>
      </Grid>
      <Grid item xs>
        <Articles articles={articles} />
      </Grid>
    </Grid>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: getArticles(),
    welcome: getMarkdown('partials/welcome'),
  },
});

export default HomePage;
