import {
  alpha,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';

import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';
import { type ArticleCard as ArticleCardModel } from '@/tools/markdown/types';

/** Vertical height that should be added for the banner. */
const BANNER_OFFSET = 90;

export const ArticleCard = ({
  banner,
  date,
  href,
  matter,
}: ArticleCardModel) => (
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
      href={href}
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
