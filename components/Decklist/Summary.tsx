// NOTE The `Chip` when used with an icon is not SSR compatible
'use client';

import { mdiAccountEdit, mdiCalendar } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Box, Chip, Typography } from '@mui/material';

import { Mana } from '@/components/Mana/Mana';

type Props = {
  authors: string | null;
  colors: string[] | null;
  date?: string;
  title: string;
};

export const Summary = ({ authors, colors, date, title }: Props) => (
  <>
    <Box
      sx={{ alignItems: 'center', display: 'flex', flexBasis: '100%', gap: 1 }}
    >
      {!!colors?.length && (
        <Box sx={{ whiteSpace: 'nowrap' }}>
          {colors.map((color, index) => (
            <Mana key={index} pattern={color} />
          ))}
        </Box>
      )}
      <Typography variant="body2">{title}</Typography>
    </Box>
    {authors && (
      <Chip
        icon={<Icon path={mdiAccountEdit} size={0.6} />}
        label={authors}
        size="small"
      />
    )}
    {date && (
      <Chip
        icon={<Icon path={mdiCalendar} size={0.6} />}
        label={date}
        size="small"
      />
    )}
  </>
);
