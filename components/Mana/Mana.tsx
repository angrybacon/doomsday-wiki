import { Box } from '@mui/material';

import 'mana-font/css/mana.min.css';

type Props = {
  pattern: string;
};

export const Mana = ({ pattern }: Props) => (
  <Box
    aria-label={`Mana symbol "${pattern}"`}
    className={`ms ms-cost ms-${pattern.toLowerCase()}`}
    component="span"
    sx={{ fontSize: '.9em', mx: 0.25, verticalAlign: 'text-bottom' }}
  />
);
