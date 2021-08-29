import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';

export const RemarkText: FunctionComponent = ({ children }) => (
  <Typography paragraph>{children}</Typography>
);
