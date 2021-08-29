import NextLink from 'next/link';
import React from 'react';
import type { Components } from 'react-markdown';
import MuiLink from '@material-ui/core/Link';

export const RemarkLink: Components['a'] = ({ children, href }) =>
  href ? (
    <NextLink href={href} passHref>
      <MuiLink>{children}</MuiLink>
    </NextLink>
  ) : (
    { children }
  );
