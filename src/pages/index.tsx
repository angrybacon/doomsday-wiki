import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Layout } from '@/components/Layout/Layout';
import { Markdown, getMarkdown } from '@/tools/markdown';

const HomePage: NextPage<Markdown> = ({ content }) => (
  <>
    <Head>
      <title>Welcome</title>
    </Head>
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent component={ReactMarkdown}>{content}</CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card>
            <CardContent component={ReactMarkdown}>{content}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps<Markdown> = async () => ({
  props: getMarkdown('partials/welcome'),
});

export default HomePage;
