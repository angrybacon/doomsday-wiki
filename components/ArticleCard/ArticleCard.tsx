'use client';

import type { Banner as BannerModel } from '@/tools/markdown/types';

import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import NextLink from 'next/link';

import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';

type Props = {
  authors: string;
  banner: BannerModel;
  date: string | null;
  href: string;
  kind: string;
  tags: string[];
  title: string;
};

export const ArticleCard = ({ banner, href, title, ...meta }: Props) => (
  <Card
    data-dark
    sx={{
      // NOTE Chromium (?) expands the child blur area outside of the border
      //      radius. This resets the blur in order to avoid white corners.
      backdropFilter: 'blur(0)',
      background: 'center / cover no-repeat',
      backgroundImage: `url(${banner.art})`,
      borderRadius: 4,
      position: 'relative',
    }}
    title={banner.title}
  >
    <CardActionArea component={NextLink} href={href} sx={{ pt: '90px' }}>
      <CardContent
        sx={[
          {
            borderBottomLeftRadius: 'inherit',
            borderBottomRightRadius: 'inherit',
            borderTop: 1,
            borderTopColor: 'divider',
            display: 'grid',
            gap: 1,
          },
          (theme) => theme.mixins.blur('weak'),
        ]}
      >
        <Typography variant="h6" sx={{ textShadow: '0 0 8px black' }}>
          {title}
        </Typography>
        <ArticleMeta {...meta} />
      </CardContent>
    </CardActionArea>
  </Card>
);
