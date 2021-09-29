import React from 'react';
import type { Components } from 'react-markdown';
import Typography from '@material-ui/core/Typography';

export const RemarkParagraph: Components['p'] = ({ children }) => (
  <Typography paragraph>{children}</Typography>
);
