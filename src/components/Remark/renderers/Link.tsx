import NextLink from 'next/link';
import React from 'react';
import type { Components } from 'react-markdown';
import MuiLink from '@material-ui/core/Link';
import { useStyles } from '@/components/Remark/renderers/Link.styles';

export const Link: Components['a'] = ({ children, href }) => {
  const classes = useStyles();
  return href ? (
    <NextLink href={href} passHref>
      <MuiLink className={classes.link}>{children}</MuiLink>
    </NextLink>
  ) : (
    { children }
  );
};
