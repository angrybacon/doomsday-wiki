import NextLink from 'next/link';
import { FunctionComponent } from 'react';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';
import type { Matter } from '@/tools/markdown/types';

interface Props {
  divider?: boolean;
  href: string;
  matter: Matter;
}

export const ArticleListItem: FunctionComponent<Props> = ({
  divider,
  href,
  matter,
}) => (
  <NextLink href={href} passHref>
    <ListItem button component="a" divider={divider}>
      <ListItemText
        disableTypography
        primary={<Typography>{matter.title}</Typography>}
        secondary={<ArticleMeta matter={matter} />}
      />
    </ListItem>
  </NextLink>
);
