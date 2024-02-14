import Typography from '@mui/material/Typography';
import { type Components } from 'react-markdown';

export const RemarkParagraph: Components['p'] = ({ children }) => (
  <Typography>{children}</Typography>
);
