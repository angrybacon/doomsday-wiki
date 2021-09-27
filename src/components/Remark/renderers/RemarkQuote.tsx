import React from 'react';
import type { Components } from 'react-markdown';
import { useStyles } from './RemarkQuote.styles';

export const RemarkQuote: Components['blockquote'] = ({ children }) => {
  const classes = useStyles();
  return <blockquote className={classes.root}>{children}</blockquote>;
};
