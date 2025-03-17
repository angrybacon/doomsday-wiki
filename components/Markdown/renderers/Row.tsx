import { alpha, Box, type Theme } from '@mui/material';
import { type SystemStyleObject } from '@mui/system';
import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Card } from '@/components/Card/Card';
import { type ScryCard } from '@/tools/scryfall/types';
import { union } from '@/tools/z/union';

const VARIANTS = ['CENTERED', 'PILE'] as const;

const VARIANTS_SCHEMA = union(VARIANTS).optional();

const STYLES: Record<
  (typeof VARIANTS)[number],
  (theme: Theme) => SystemStyleObject<Theme>
> = {
  CENTERED: () => ({
    justifyContent: 'space-around',
    mx: { xs: -0.5, md: -1 },
    '> *': { flexBasis: '25%', maxWidth: '25%' },
  }),
  PILE: ({ palette }) => ({
    bgcolor: alpha(palette.primary.main, 0.1),
    borderRadius: 4,
    py: { xs: 2, sm: 4 }, // NOTE Should match the `gutters` mixin
    px: { xs: 1.5, sm: 3 }, // NOTE Should match the `gutters` mixin
    '> *': { width: 0.2 },
  }),
};

type Props = ExtraProps & {
  row?: { cards?: { data: ScryCard[]; id: string }[] };
  variant?: string;
};

export const Row: FunctionComponent<Props> = ({ node, row, variant }) => {
  if (!row?.cards) {
    console.error('Missing cards for row', node);
    return null;
  }
  let style: (typeof VARIANTS)[number] = 'CENTERED';
  const { data, error } = VARIANTS_SCHEMA.safeParse(variant);
  if (error) {
    console.error(`Unknown variant "${variant}" for row`);
  } else if (data) {
    style = data;
  }
  return (
    <Box sx={[{ display: 'flex' }, STYLES[style]]}>
      {row.cards.map(({ data, id }) => (
        <Box key={id} sx={{ px: { xs: 0.5, md: 1 } }}>
          <Card data={data} />
        </Box>
      ))}
    </Box>
  );
};
