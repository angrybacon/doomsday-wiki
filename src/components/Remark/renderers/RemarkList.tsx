import Typography from '@mui/material/Typography';
import { ElementType, FunctionComponent, ReactNode } from 'react';

// NOTE Typings for Components['ol'] and Components['ul']
interface Props {
  children: ReactNode & ReactNode[];
  ordered: boolean;
}

export const RemarkList: FunctionComponent<Props> = ({ children, ordered }) => {
  const component: ElementType = ordered ? 'ol' : 'ul';
  return <Typography component={component}>{children}</Typography>;
};
