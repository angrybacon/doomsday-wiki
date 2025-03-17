import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { type Metadata } from 'next';
import NextLink from 'next/link';

import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';
import { getArticleCards } from '@/tools/markdown/getArticleCards';

export const metadata: Metadata = {
  title: 'Articles',
};

export default async () => {
  const articles = await getArticleCards();
  return (
    // NOTE Wrap with an extra `div` because `List` might reset parent styles
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
        {articles.map(({ date, href, matter }, index) => (
          <ListItemButton
            component={NextLink}
            divider={index < articles.length - 1}
            href={href}
            key={href}
          >
            <ListItemText
              disableTypography
              primary={<Typography>{matter.title}</Typography>}
              secondary={<ArticleMeta date={date} {...matter} />}
              sx={{ display: 'grid', gap: 1 }}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};
