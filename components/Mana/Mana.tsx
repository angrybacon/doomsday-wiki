import type { Pattern } from '@/tools/mana/constants';

import { Box } from '@mui/material';

import 'mana-font/css/mana.css';

type Props = {
  pattern: Pattern | (string & {});
};

export const Mana = ({ pattern }: Props) => (
  <Box
    aria-label={`Mana symbol (${pattern})`}
    className={`ms ms-cost ms-${pattern.toLowerCase()}`}
    component="span"
    // oxlint-disable-next-line jsx-ally/prefer-tag-over-role
    role="img"
    sx={{ mx: 0.25, verticalAlign: 'text-bottom' }}
  />
);
