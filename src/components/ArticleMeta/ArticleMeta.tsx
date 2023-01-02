import React, { FunctionComponent } from 'react';
import { mdiAccount, mdiCalendar } from '@mdi/js';
import Icon from '@mdi/react';
import { Box } from '@mui/material';
import { ArticleChip } from '@/components/ArticleChip/ArticleChip';
import type { Matter } from '@/tools/markdown/types';

interface Props {
  matter: Matter;
}

export const ArticleMeta: FunctionComponent<Props> = ({ matter }) => {
  const { authors, date, kind, tags = [] } = matter;
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
      <Box sx={{ m: -0.5, '> *': { m: 0.5 } }}>
        {authors && (
          <ArticleChip
            icon={<Icon path={mdiAccount} size={0.5} />}
            label={authors}
          />
        )}
        {date && (
          <ArticleChip
            icon={<Icon path={mdiCalendar} size={0.5} />}
            label={date}
          />
        )}
        {tags.map((tag) => (
          <ArticleChip
            key={tag}
            label={tag}
            variant="outlined"
            sx={{ textTransform: 'lowercase' }}
          />
        ))}
      </Box>
      <ArticleChip kind={kind} sx={{ ml: 1 }} />
    </Box>
  );
};
