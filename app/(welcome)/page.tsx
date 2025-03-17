import { Grid2 as Grid } from '@mui/material';
import { type Metadata } from 'next';

import { Markdown } from '@/components/Markdown/Markdown';
import { getArticleCards } from '@/tools/markdown/getArticleCards';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import { Articles } from './Articles';

export const metadata: Metadata = {
  title: 'Welcome',
};

export default async () => {
  const articles = await getArticleCards();
  const welcome = await getMarkdown('partials', 'welcome');
  return (
    <Grid container spacing={3}>
      <Grid size={{ lg: 7 }}>
        <Markdown markdown={welcome} />
      </Grid>
      <Grid size="grow">
        <Articles articles={articles} />
      </Grid>
    </Grid>
  );
};
