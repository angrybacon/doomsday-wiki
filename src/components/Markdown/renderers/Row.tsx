import { Box } from '@mui/material';
import { alpha, type Theme } from '@mui/material/styles';
import { type SystemStyleObject } from '@mui/system';
import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Card } from '@/components/Card/Card';
import { gutters } from '@/theme/tools/gutters';
import { type ScryCard } from '@/tools/scryfall/types';
import { union } from '@/tools/z/union';

const VARIANTS = ['CENTERED', 'PILE'] as const;

const VARIANTS_SCHEMA = union(VARIANTS).optional();

const STYLES: Record<
  (typeof VARIANTS)[number],
  (theme: Theme) => SystemStyleObject<Theme>
> = {
  CENTERED: ({ mixins }) => ({
    ...mixins.gutters,
    justifyContent: 'space-around',
    mx: -1,
    '> *': { flexBasis: '25%', maxWidth: '25%' },
  }),
  PILE: (theme) => ({
    ...gutters(theme),
    bgcolor: alpha(theme.palette.primary.light, 0.1),
    border: 1,
    borderColor: 'divider',
    borderLeft: 0,
    borderRight: 0,
    py: { xs: 2, sm: 4 }, // NOTE Should match the `gutters` mixin
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
    <Box sx={({ mixins }) => mixins.barf}>
      <Box
        sx={[
          { display: 'flex', mx: { xs: -0.25, sm: -0.5, md: -1 } },
          STYLES[style],
        ]}
      >
        {row.cards.map(({ data, id }) => (
          <Box key={id} sx={{ px: { xs: 0.25, sm: 0.5, md: 1 } }}>
            <Card data={data} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
