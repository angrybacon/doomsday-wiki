import { Box, Typography } from '@mui/material';
import { type FunctionComponent } from 'react';

import { type Card } from '@/tools/decklists/types';

export interface Props {
  cards: Card[];
}

export const Column: FunctionComponent<Props> = ({ cards }) => {
  if (!cards.length) return null;
  return (
    <Box
      component="ul"
      sx={{ listStyleType: 'none', m: 0, minWidth: 170, p: 0 }}
    >
      {cards.map(([quantity, name]) => (
        <Box
          component="li"
          key={`card-${quantity}-${name}`}
          sx={{ display: 'flex' }}
        >
          <Typography
            component="span"
            variant="body2"
            sx={{ maxWidth: '1.6em', minWidth: '1.6em' }}
          >
            {quantity}
          </Typography>
          <Typography component="span" variant="body2">
            {name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
