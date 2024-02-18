import Typography from '@mui/material/Typography';
import { FunctionComponent, PropsWithChildren } from 'react';

// NOTE Typings for Components['ol'] and Components['ul']
interface Props extends PropsWithChildren {
  ordered: boolean;
}

export const RemarkList: FunctionComponent<Props> = ({ children, ordered }) => (
  <Typography component={ordered ? 'ol' : 'ul'}>{children}</Typography>
);
