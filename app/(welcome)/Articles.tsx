'use client';

import { Button, ButtonGroup, Grid2 as Grid } from '@mui/material';
import { useEffect, useRef, useState, type ComponentProps } from 'react';

import { ArticleCard } from '@/components/ArticleCard/ArticleCard';

const INITIAL_SIZE = 4;

type Props = {
  articles: ComponentProps<typeof ArticleCard>[];
};

export const Articles = ({ articles }: Props) => {
  const root = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(INITIAL_SIZE);

  const showMore =
    (count = 0) =>
    () =>
      setSize((previous) => (count ? previous + count : articles.length));

  useEffect(() => {
    if (size > INITIAL_SIZE) {
      root?.current?.scrollIntoView({ block: 'end' });
    }
  }, [size]);

  return (
    <Grid
      container
      ref={root}
      spacing={2}
      sx={({ spacing }) => ({
        flexDirection: 'column',
        scrollMarginBottom: spacing(2),
      })}
    >
      {articles.slice(0, size).map((article) => (
        <Grid key={article.href}>
          <ArticleCard {...article} />
        </Grid>
      ))}
      <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup disabled={size >= articles.length} variant="outlined">
          <Button onClick={showMore(2)}>Show more</Button>
          <Button onClick={showMore()}>Show all</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};
