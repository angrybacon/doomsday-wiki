import { Typography } from '@mui/material';
import { type Components } from 'react-markdown';

export const ListOrdered: Components['ol'] = ({ children }) => (
  <Typography component="ol">{children}</Typography>
);

export const ListUnordered: Components['ul'] = ({ children }) => (
  <Typography component="ul">{children}</Typography>
);
