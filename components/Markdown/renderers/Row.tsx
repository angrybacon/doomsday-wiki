import { RemarkError } from '@korumite/kiwi';
import { type ScrySingleResponse } from '@korumite/scrydrop';
import { Box, type SxProps, type Theme } from '@mui/material';
import * as z from 'zod';

import { Card } from '@/components/Card/Card';
import { type Hastified } from '@/components/Markdown/types';

const VariantSchema = z.literal(['CENTERED', 'PILE']);

const STYLES: Record<z.infer<typeof VariantSchema>, SxProps<Theme>> = {
  CENTERED: {
    display: 'flex',
    justifyContent: 'space-around',
    mx: { xs: -0.5, md: -1 },
    '> *': { flexBasis: '25%', maxWidth: '25%', px: { xs: 0.5, md: 1 } },
  },
  PILE: {
    bgcolor: 'rgba(var(--mui-palette-primary-mainChannel) / .1)',
    borderRadius: 4,
    display: 'flex',
    py: { xs: 2, sm: 4 },
    px: { xs: 1.5, sm: 3 },
    '> *': { px: { xs: 0.5, md: 1 }, width: 0.2 },
  },
};

type Props = {
  node: Hastified<{ cards: { faces: ScrySingleResponse; id: string }[] }>;
  path?: string;
  variant?: string;
};

export const Row = ({ node, path, variant }: Props) => {
  const { cards } = node.properties;
  if (!cards?.length) throw new RemarkError('Missing cards', { node, path });
  const { data, success } = VariantSchema.optional().safeParse(variant);
  if (!success) throw new RemarkError(`Unknown "${variant}"`, { node, path });
  return (
    <Box sx={STYLES[data || 'CENTERED']}>
      {cards.map(({ faces, id }) => (
        // NOTE The extra wrapper is necessary for each card to retain the
        //      harcoded aspect ratio.
        <div key={id}>
          <Card faces={faces} />
        </div>
      ))}
    </Box>
  );
};
