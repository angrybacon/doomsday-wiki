import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Article } from '@/components/Article/Article';
import { Layout } from '@/components/Layout/Layout';
import { Title } from '@/components/Title/Title';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import type {
  Markdown,
  Article as ArticleModel,
  WithChapters,
} from '@/tools/markdown/types';

interface Props {
  articles: ArticleModel[];
  welcome: Markdown;
}

const HomePage: NextPage<Props & WithChapters> = ({
  articles,
  chapters,
  welcome,
}) => (
  <Layout chapters={chapters}>
    <Title title="Welcome" />
    <Grid container spacing={2}>
      <Grid item sm={6} md={7}>
        <Card>
          <CardContent component={ReactMarkdown}>{welcome.content}</CardContent>
        </Card>
      </Grid>
      <Grid item xs>
        <Grid container direction="column" spacing={2}>
          {articles.map(({ data, route }) => (
            <Grid item key={`article-${route}`} xs={12}>
              <Article matter={data} route={route} />
            </Grid>
          ))}
        </Grid>
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