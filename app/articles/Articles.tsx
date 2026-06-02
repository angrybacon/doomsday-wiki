'use client';

import type { getArticleCards } from '@/tools/markdown/getArticleCards';

import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import NextLink from 'next/link';

import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';

type Props = {
  articles: Awaited<ReturnType<typeof getArticleCards>>;
};

export const Articles = ({ articles }: Props) => (
  // NOTE Wrap with an extra `div` because `List` resets its margin
  <div>
    <List
      disablePadding
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 4,
        overflow: 'hidden',
      }}
    >
      {articles.map(({ href, title, ...meta }, index) => (
        <ListItemButton
          component={NextLink}
          divider={index < articles.length - 1}
          href={href}
          key={href}
        >
          <ListItemText
            disableTypography
            primary={<Typography>{title}</Typography>}
            secondary={<ArticleMeta {...meta} />}
            sx={{ display: 'grid', gap: 1 }}
          />
        </ListItemButton>
      ))}
    </List>
  </div>
);
