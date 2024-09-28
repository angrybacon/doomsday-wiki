import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid2 as Grid,
} from '@mui/material';
import { type GetStaticProps, type NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { Layout } from '@/components/Layout/Layout';
import { Markdown } from '@/components/Markdown/Markdown';
import { getArticleCards } from '@/tools/markdown/getArticleCards';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import { MENU } from '@/tools/markdown/menu';
import {
  type ArticleCard as ArticleCardModel,
  type Partial,
} from '@/tools/markdown/types';

const ARTICLES_INITIAL_SIZE = 5;

type Props = {
  articles: ArticleCardModel[];
  menu: typeof MENU;
  welcome: Partial;
};

const Page: NextPage<Props> = ({ articles, menu, welcome }) => {
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
      <Grid container spacing={3}>
        <Grid size={{ lg: 7 }}>
          <Card>
            <CardContent>
              <Markdown markdown={welcome} />
            </CardContent>
          </Card>
        </Grid>
        <Grid size="grow">
          <Grid
            container
            ref={articlesRoot}
            spacing={2}
            sx={{ flexDirection: 'column', pb: 2 }}
          >
            {articles.slice(0, size).map((article) => (
              <Grid key={article.href}>
                <ArticleCard {...article} />
              </Grid>
            ))}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
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
    menu: MENU,
    welcome: await getMarkdown('partials', 'welcome'),
  },
});

export default Page;
