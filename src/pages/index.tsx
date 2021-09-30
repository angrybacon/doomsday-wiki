import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Article } from '@/components/Article/Article';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import type { ExtraPageProps } from '@/interfaces/page.model';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import type { Document, Markdown } from '@/tools/markdown/types';

interface Props {
  articles: Document[];
  welcome: Markdown;
}

const HomePage: NextPage<Props & ExtraPageProps> = ({
  articles,
  decklists,
  menu,
  welcome,
}) => {
  const [size, setSize] = useState(5);

  const showMore = () => {
    setSize((previous) => previous + 3);
  };

  return (
    <Layout
      wrapper={Grid}
      wrapperProps={{ container: true, spacing: 2 }}
      menu={menu}
      title="Welcome"
    >
      <Grid item sm={7}>
        <Card>
          <CardContent
            component={Remark}
            decklists={decklists}
            markdown={welcome}
          />
        </Card>
      </Grid>
      <Grid item xs>
        <Grid container direction="column" spacing={2}>
          {articles.slice(0, size).map(({ data, route }) => (
            <Grid item key={`article-${route}`} xs={12}>
              <Article matter={data} route={route} />
            </Grid>
          ))}
          {size < articles.length + 1 && (
            <Grid item>
              <Box display="flex" justifyContent="center">
                <Button onClick={showMore} size="small">
                  Show more
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: getArticles(),
    welcome: await getMarkdown('partials/welcome'),
  },
});

export default HomePage;
