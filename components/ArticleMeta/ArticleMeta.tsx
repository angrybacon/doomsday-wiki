import AttributionIcon from '@mui/icons-material/AttributionRounded';
import EventIcon from '@mui/icons-material/EventRounded';
import { Box } from '@mui/material';

import { ArticleChip } from '~/components/ArticleChip/ArticleChip';

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
      {authors && <ArticleChip icon={<AttributionIcon />} label={authors} />}
      {date && <ArticleChip icon={<EventIcon />} label={date} />}
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
