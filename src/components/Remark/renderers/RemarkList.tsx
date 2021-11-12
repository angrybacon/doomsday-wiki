import React, { ElementType, FunctionComponent, ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';

// NOTE Typings for Components['ol'] and Components['ul']
interface Props {
  children: ReactNode & ReactNode[];
  ordered: boolean;
}

export const RemarkList: FunctionComponent<Props> = ({ children, ordered }) => {
  const component: ElementType = ordered ? 'ol' : 'ul';
  return (
    <Typography component={component} gutterBottom>
      {children}
    </Typography>
  );
};
