import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import NextLink from 'next/link';
import { type FunctionComponent } from 'react';

import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';
import { type ArticleCard as ArticleCardModel } from '@/tools/markdown/types';

/** Vertical height that should be added for the banner. */
const BANNER_OFFSET = 90;

export type Props = ArticleCardModel;

export const ArticleCard: FunctionComponent<Props> = ({
  banner,
  date,
  matter,
  route,
}) => (
  <Card
    sx={{
      background: 'center / cover no-repeat',
      backgroundImage: `url(${banner.art})`,
      position: 'relative',
    }}
    title={banner.title}
  >
    <CardActionArea
      component={NextLink}
      href={route}
      sx={{ pt: `${BANNER_OFFSET}px` }}
    >
      <CardContent
        sx={({ palette }) => ({
          backgroundColor: alpha(palette.background.default, 0.8),
          borderTop: 1,
          borderTopColor: 'dividerOpaque',
          p: 2,
        })}
      >
        <Typography variant="h6">{matter.title}</Typography>
        <ArticleMeta date={date} matter={matter} />
      </CardContent>
    </CardActionArea>
  </Card>
);
