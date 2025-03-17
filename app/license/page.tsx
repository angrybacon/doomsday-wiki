import { Typography } from '@mui/material';
import { type Metadata } from 'next';

import { Markdown } from '@/components/Markdown/Markdown';
import { getMarkdown } from '@/tools/markdown/getMarkdown';

export const metadata: Metadata = {
  title: 'License',
};

export default async () => {
  const license = await getMarkdown('partials', 'license');
  return (
    <div>
      <Typography gutterBottom variant="h1">
        License
      </Typography>
      <Markdown markdown={license} />
    </div>
  );
};
