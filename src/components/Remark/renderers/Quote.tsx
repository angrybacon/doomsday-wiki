import React from 'react';
import type { Components } from 'react-markdown';
import { useStyles } from '@/components/Remark/renderers/Quote.styles';

export const Quote: Components['blockquote'] = ({ children }) => {
  const classes = useStyles();
  return <blockquote className={classes.root}>{children}</blockquote>;
};
