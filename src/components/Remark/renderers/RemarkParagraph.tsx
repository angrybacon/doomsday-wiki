import React from 'react';
import type { Components } from 'react-markdown';
import Typography from '@mui/material/Typography';

export const RemarkParagraph: Components['p'] = ({ children }) => (
  <Typography>{children}</Typography>
);
