import { GetStaticProps, NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
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
  const initialSize = 5;
  const articleRoot = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(initialSize);

  const showMore = () => {
    setSize((previous) => previous + 3);
  };

  useEffect(() => {
    if (size > initialSize) {
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
        <Grid container direction="column" ref={articleRoot} spacing={2}>
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
    articles: await getArticles(),
    decklists: getDecklists(),
    menu: getMenu(),
    partials: await getPartials(),
    welcome: await getMarkdown('partials/welcome'),
  },
});

export default HomePage;
