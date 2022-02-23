import { GetStaticProps, NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import type { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Article } from '@/components/Article/Article';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import { getDecklists } from '@/tools/decklists/getDecklists';
import type { Decklists } from '@/tools/decklists/types';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMarkdown, getPartials } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type {
  Document,
  Markdown,
  Menu,
  Partials,
} from '@/tools/markdown/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    articles: {
      paddingBottom: theme.spacing(2),
    },
  })
);

const ARTICLES_INITIAL_SIZE = 5;

interface Props {
  articles: Document[];
  decklists: Decklists;
  menu: Menu;
  partials: Partials;
  welcome: Markdown;
}

const HomePage: NextPage<Props> = ({
  articles,
  decklists,
  menu,
  partials,
  welcome,
}) => {
  const classes = useStyles();
  const articleRoot = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(ARTICLES_INITIAL_SIZE);

  const showMore = () => {
    setSize((previous) => previous + 3);
  };

  useEffect(() => {
    if (size > ARTICLES_INITIAL_SIZE) {
      articleRoot?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [size]);

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
            partials={partials}
          />
        </Card>
      </Grid>
      <Grid item xs>
        <Grid
          className={classes.articles}
          container
          direction="column"
          ref={articleRoot}
          spacing={2}
        >
          {articles.slice(0, size).map(({ matter, route }) => (
            <Grid item key={`article-${route}`} xs={12}>
              <Article matter={matter} route={route} />
            </Grid>
          ))}
          {size < articles.length + 1 && (
            <Grid
              component={Box}
              item
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button onClick={showMore} variant="outlined">
                Show more
              </Button>
            </Grid>
          )}
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
    partials: await getPartials(),
    welcome: await getMarkdown('partials/welcome'),
  },
});

export default HomePage;
