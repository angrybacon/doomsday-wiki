import type { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import 'mana-font/css/mana.min.css';

interface Props {
  pattern: string;
}

export const Mana: FunctionComponent<Props> = ({ pattern }) => (
  <Box
    component="i"
    className={`ms ms-cost ms-${pattern}`}
    sx={{ fontSize: '.8em', mx: 0.125, verticalAlign: 'initial' }}
  />
);
