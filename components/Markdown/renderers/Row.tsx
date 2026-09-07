import type { ScrySingleResponse } from '@korumite/scrydrop';
import type { SxProps, Theme } from '@mui/material';
import type { Hastified } from '~/components/Markdown/types';

import { RemarkError } from '@korumite/kiwi';
import { Box } from '@mui/material';
import * as z from 'zod';

import { Card } from '~/components/Card/Card';

const VariantSchema = z.literal(['CENTERED', 'PILE']);

const STYLES: Record<z.infer<typeof VariantSchema>, SxProps<Theme>> = {
  CENTERED: {
    display: 'flex',
    gap: { xs: 0.5, sm: 1 },
    justifyContent: 'space-around',
    '> *': { flexBasis: '25%', maxWidth: '25%' },
  },
  PILE: {
    bgcolor: 'rgb(var(--mui-palette-primary-mainChannel) / .1)',
    borderRadius: 4,
    display: 'flex',
    gap: { xs: 0.5, sm: 1 },
    p: 3,
    '> *': { width: 0.2 },
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
    <Box sx={STYLES[data ?? 'CENTERED']}>
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
