'use client';

import { Box, type SxProps, type Theme } from '@mui/material';
import { type ExtraProps } from 'react-markdown';
import * as z from 'zod';

import { Card } from '@/components/Card/Card';
import { RemarkError } from '@/tools/remark/RemarkError';
import { type ScryCard } from '@/tools/scryfall/types';

const VariantSchema = z.literal(['CENTERED', 'PILE']);

const STYLES: Record<z.infer<typeof VariantSchema>, SxProps<Theme>> = {
  CENTERED: () => ({
    display: 'flex',
    justifyContent: 'space-around',
    mx: { xs: -0.5, md: -1 },
    '> *': { flexBasis: '25%', maxWidth: '25%', px: { xs: 0.5, md: 1 } },
  }),
  PILE: (theme) => ({
    bgcolor: `rgba(${theme.vars.palette.primary.mainChannel} / .1)`,
    borderRadius: 4,
    display: 'flex',
    py: { xs: 2, sm: 4 },
    px: { xs: 1.5, sm: 3 },
    '> *': { px: { xs: 0.5, md: 1 }, width: 0.2 },
  }),
};

type Props = ExtraProps & {
  path?: string;
  row?: { cards?: { data: ScryCard[]; id: string }[] };
  variant?: string;
};

export const Row = ({ node, path, row, variant }: Props) => {
  if (!row?.cards?.length) return null;
  const { data, success } = VariantSchema.optional().safeParse(variant);
  if (!success) throw new RemarkError(`Unknown "${variant}"`, { node, path });
  return (
    <Box sx={STYLES[data || 'CENTERED']}>
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
