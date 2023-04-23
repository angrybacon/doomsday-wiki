import { GetStaticProps, NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { Button, ButtonGroup, Card, CardContent, Grid } from '@mui/material';
import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import { getDecklists } from '@/tools/decklists/getDecklists';
import type { Decklists } from '@/tools/decklists/types';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMarkdownPartial } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Document, Markdown, Menu } from '@/tools/markdown/types';

const ARTICLES_INITIAL_SIZE = 5;

interface Props {
  articles: Document[];
  decklists: Decklists;
  menu: Menu;
  welcome: Markdown;
}

const HomePage: NextPage<Props> = ({ articles, decklists, menu, welcome }) => {
  const articlesRoot = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(ARTICLES_INITIAL_SIZE);

  const showMore = (count?: number) => () =>
    setSize((previous) =>
      count === undefined ? articles.length : previous + count
    );

  useEffect(() => {
    if (size > ARTICLES_INITIAL_SIZE) {
      articlesRoot?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [size]);

  return (
    <Layout menu={menu} title="Welcome">
      <Grid container spacing={2}>
        <Grid item sm={7}>
          <Card>
            <CardContent>
              <Remark decklists={decklists} markdown={welcome} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Grid
            container
            ref={articlesRoot}
            spacing={2}
            sx={{ flexDirection: 'column', pb: 2 }}
          >
            {articles.slice(0, size).map(({ matter, route }) => (
              <Grid item key={`article-${route}`} xs={12}>
                <ArticleCard href={route} matter={matter} />
              </Grid>
            ))}
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonGroup
                disabled={size >= articles.length}
                variant="outlined"
              >
                <Button onClick={showMore(2)}>Show more</Button>
                <Button onClick={showMore()}>Show all</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: await getArticles(),
    decklists: getDecklists(),
    menu: getMenu(),
    welcome: await getMarkdownPartial({ path: 'welcome' }),
  },
});

export default HomePage;
