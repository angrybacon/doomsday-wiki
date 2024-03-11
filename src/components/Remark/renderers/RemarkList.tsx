import Typography from '@mui/material/Typography';
import { type Components } from 'react-markdown';

export const RemarkListOrdered: Components['ol'] = ({ children }) => (
  <Typography component="ol">{children}</Typography>
);

export const RemarkListUnordered: Components['ul'] = ({ children }) => (
  <Typography component="ul">{children}</Typography>
);
