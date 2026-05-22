import { Box } from '@mui/material';

import { type Pattern } from '@/tools/mana/constants';

import 'mana-font/css/mana.min.css';

type Props = {
  pattern: Pattern | (string & {});
};

export const Mana = ({ pattern }: Props) => (
  <Box
    aria-label={`Mana symbol (${pattern})`}
    className={`ms ms-cost ms-${pattern.toLowerCase()}`}
    component="span"
    role="img"
    sx={{ mx: 0.25, verticalAlign: 'text-bottom' }}
  />
);
