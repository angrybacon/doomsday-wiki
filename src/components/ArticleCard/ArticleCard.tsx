import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';
import type { Matter } from '@/tools/markdown/types';

/** Vertical height that should be added for the banner, if any. */
const BANNER_OFFSET = 90;

export interface Props {
  href: string;
  matter: Matter;
}

export const ArticleCard: FunctionComponent<Props> = ({ href, matter }) => {
  const { bannerData, title } = matter;

  if (!bannerData) return null;

  return (
    <Card
      sx={{
        background: `url(${bannerData.art}) center / cover no-repeat`,
        border: (theme) => (theme.palette.mode === 'dark' ? 1 : 0),
        borderColor: 'dividerOpaque',
        position: 'relative',
      }}
      title={bannerData.title}
    >
      <NextLink href={href} passHref>
        <CardActionArea sx={{ pt: `${BANNER_OFFSET}px` }}>
          <CardContent
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.background.default, 0.9),
              borderTop: 1,
              borderTopColor: 'dividerOpaque',
              p: 2,
            }}
          >
            <Typography variant="h6">{title}</Typography>
            <ArticleMeta matter={matter} />
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
};