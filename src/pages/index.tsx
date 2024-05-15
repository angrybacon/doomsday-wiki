import { Button, ButtonGroup, Card, CardContent, Grid } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { Layout } from '@/components/Layout/Layout';
import { Markdown } from '@/components/Markdown/Markdown';
import { getDecklists } from '@/tools/decklists/getDecklists';
import { type Decklists } from '@/tools/decklists/types';
import { getArticleCards } from '@/tools/markdown/getArticleCards';
import { getPartial } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import {
  type ArticleCard as ArticleCardModel,
  type MenuEntry,
  type Partial,
} from '@/tools/markdown/types';

const ARTICLES_INITIAL_SIZE = 5;

type Props = {
  articles: ArticleCardModel[];
  decklists: Decklists;
  menu: MenuEntry[];
  welcome: Partial;
};

const HomePage: NextPage<Props> = ({ articles, decklists, menu, welcome }) => {
  const articlesRoot = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(ARTICLES_INITIAL_SIZE);

  const showMore =
    (count = 0) =>
    () =>
      setSize((previous) => (count ? previous + count : articles.length));

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
              <Markdown decklists={decklists} markdown={welcome} />
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
            {articles.slice(0, size).map((article) => (
              <Grid item key={`article-${article.route}`} xs={12}>
                <ArticleCard {...article} />
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
    articles: await getArticleCards(),
    decklists: getDecklists(),
    menu: getMenu(),
    welcome: await getPartial('welcome'),
  },
});

export default HomePage;
