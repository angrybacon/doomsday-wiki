import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { Article } from '@/components/Article/Article';
import { Article as ArticleModel } from '@/tools/markdown/types';

interface Props {
  articles: ArticleModel[];
}

export const Articles: FunctionComponent<Props> = ({ articles }) => (
  <Grid container direction="column" spacing={2}>
    {articles.map(({ data, route }) => (
      <Grid item key={`article-${route}`} xs={12}>
        <Article matter={data} route={route} />
      </Grid>
    ))}
  </Grid>
);
