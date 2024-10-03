import { Box } from '@mui/material';
import { type FunctionComponent } from 'react';

import 'mana-font/css/mana.min.css';

type Props = {
  pattern: string;
};

export const Mana: FunctionComponent<Props> = ({ pattern }) => (
  <Box
    aria-label={`Mana symbol: "${pattern}"`}
    component="span"
    className={`ms ms-cost ms-${pattern.toLowerCase()}`}
    sx={{ fontSize: '.9em', mx: 0.25, verticalAlign: 'text-bottom' }}
  />
);
