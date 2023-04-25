import NextLink from 'next/link';
import { FunctionComponent } from 'react';
import { ListItemButton, ListItemText, Typography } from '@mui/material';
import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';
import type { ArticleMatter } from '@/tools/markdown/types';

interface Props {
  date: string | null;
  divider?: boolean;
  href: string;
  matter: ArticleMatter;
}

export const ArticleListItem: FunctionComponent<Props> = ({
  date,
  divider,
  href,
  matter,
}) => (
  <NextLink href={href} passHref>
    <ListItemButton component="a" divider={divider}>
      <ListItemText
        disableTypography
        primary={<Typography>{matter.title}</Typography>}
        secondary={<ArticleMeta date={date} matter={matter} />}
      />
    </ListItemButton>
  </NextLink>
);
