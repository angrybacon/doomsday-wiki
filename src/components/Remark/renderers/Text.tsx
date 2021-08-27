import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';

export const Text: FunctionComponent = ({ children }) => (
  <Typography paragraph>{children}</Typography>
);
