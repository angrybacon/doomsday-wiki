import Typography from '@mui/material/Typography';
import { PropsWithChildren } from 'react';
import { type Components } from 'react-markdown';

// NOTE Typings for Components['ol'] and Components['ul']
interface Props extends PropsWithChildren {
  ordered: boolean;
}

export const RemarkList: Components['ul'] = ({ children, ordered }) => (
  <Typography component={ordered ? 'ol' : 'ul'}>{children}</Typography>
);
