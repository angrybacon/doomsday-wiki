import { mdiAccountEdit, mdiCalendar } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Box } from '@mui/material';

import { ArticleChip } from '@/components/ArticleChip/ArticleChip';

type Props = {
  authors: string;
  date: string | null;
  kind: string;
  tags: string[];
};

export const ArticleMeta = ({ authors, date, kind, tags }: Props) => (
  <Box
    sx={{
      alignItems: 'end',
      display: 'flex',
      gap: 0.5,
      justifyContent: 'space-between',
    }}
  >
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {authors && (
        <ArticleChip
          icon={<Icon path={mdiAccountEdit} size={0.6} />}
          label={authors}
        />
      )}
      {date && (
        <ArticleChip
          icon={<Icon path={mdiCalendar} size={0.6} />}
          label={date}
        />
      )}
      {tags.map((tag) => (
        <ArticleChip
          key={tag}
          label={tag}
          sx={{ textTransform: 'lowercase' }}
        />
      ))}
    </Box>
    <ArticleChip label={kind} sx={{ textTransform: 'lowercase' }} />
  </Box>
);
