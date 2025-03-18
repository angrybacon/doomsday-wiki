import { alpha, Box, type SxProps, type Theme } from '@mui/material';
import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Card } from '@/components/Card/Card';
import { type ScryCard } from '@/tools/scryfall/types';
import { union } from '@/tools/z/union';

const VARIANTS = ['CENTERED', 'PILE'] as const;

const VARIANTS_SCHEMA = union(VARIANTS).optional();

const STYLES: Record<(typeof VARIANTS)[number], SxProps<Theme>> = {
  CENTERED: () => ({
    display: 'flex',
    justifyContent: 'space-around',
    mx: { xs: -0.5, md: -1 },
    '> *': { flexBasis: '25%', maxWidth: '25%', px: { xs: 0.5, md: 1 } },
  }),
  PILE: ({ palette }) => ({
    bgcolor: alpha(palette.primary.main, 0.1),
    borderRadius: 4,
    display: 'flex',
    py: { xs: 2, sm: 4 },
    px: { xs: 1.5, sm: 3 },
    '> *': { px: { xs: 0.5, md: 1 }, width: 0.2 },
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
    <Box sx={STYLES[style]}>
      {row.cards.map(({ data, id }) => (
        // NOTE The extra wrapper is necessary for each card to retain the
        //      harcoded aspect ratio.
        <div key={id}>
          <Card data={data} />
        </div>
      ))}
    </Box>
  );
};
