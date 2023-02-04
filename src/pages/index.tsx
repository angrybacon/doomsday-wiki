import { GetStaticProps, NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { Button, Card, CardContent, Grid } from '@mui/material';
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
  const articleRoot = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(ARTICLES_INITIAL_SIZE);

  const showMore = () => setSize((previous) => previous + 3);

  useEffect(() => {
    if (size > ARTICLES_INITIAL_SIZE) {
      articleRoot?.current?.scrollIntoView({
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
            ref={articleRoot}
            spacing={2}
            sx={{ flexDirection: 'column', pb: 2 }}
          >
            {articles.slice(0, size).map(({ matter, route }) => (
              <Grid item key={`article-${route}`} xs={12}>
                <ArticleCard href={route} matter={matter} />
              </Grid>
            ))}
            {size < articles.length + 1 && (
              <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={showMore} variant="outlined">
                  Show more
                </Button>
              </Grid>
            )}
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
    welcome: await getMarkdownPartial('welcome'),
  },
});

export default HomePage;
