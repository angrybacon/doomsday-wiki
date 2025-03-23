import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import NextLink from 'next/link';

import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';
import { type ArticleCard as ArticleCardModel } from '@/tools/markdown/types';

export const ArticleCard = ({
  banner,
  date,
  href,
  matter,
}: ArticleCardModel) => (
  <Card
    className="dark"
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
          ({ mixins }) => mixins.blur('weak'),
        ]}
      >
        <Typography variant="h6" sx={{ textShadow: '0 0 8px black' }}>
          {matter.title}
        </Typography>
        <ArticleMeta date={date} {...matter} />
      </CardContent>
    </CardActionArea>
  </Card>
);
