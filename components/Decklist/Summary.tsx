// NOTE Required for the `Chip` when used with an icon
'use client';

import AttributionIcon from '@mui/icons-material/AttributionRounded';
import EventIcon from '@mui/icons-material/EventRounded';
import { Box, Chip, Typography } from '@mui/material';

import { Mana } from '~/components/Mana/Mana';

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
            <Mana
              // oxlint-disable-next-line react/no-array-index-key
              key={index}
              pattern={color}
            />
          ))}
        </Box>
      )}
      <Typography variant="body2">{title}</Typography>
    </Box>
    {authors && (
      <Chip icon={<AttributionIcon />} label={authors} size="small" />
    )}
    {date && <Chip icon={<EventIcon />} label={date} size="small" />}
  </>
);
