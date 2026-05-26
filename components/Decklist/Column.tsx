import type { Card } from '@/tools/decklists/types';

import { Box, Typography } from '@mui/material';

type Props = {
  cards: Card[];
};

export const Column = ({ cards }: Props) => {
  if (!cards.length) return null;
  return (
    <Box component="ul" sx={{ m: 0, p: 0 }}>
      {cards.map(([quantity, name]) => (
        <Box component="li" key={name} sx={{ display: 'flex' }}>
          <Typography variant="body2" sx={{ width: '1.5em' }}>
            {quantity}
          </Typography>
          <Typography variant="body2">{name}</Typography>
        </Box>
      ))}
    </Box>
  );
};
