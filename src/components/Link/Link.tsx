import NextLink from 'next/link';
import React, { FunctionComponent, ReactNode } from 'react';
import MuiLink from '@mui/material/Link';

interface Props {
  children: ReactNode;
  external?: boolean;
  href: string;
}

export const Link: FunctionComponent<Props> = ({
  children,
  external,
  href,
}) => {
  const extra = external
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {};
  return (
    <NextLink href={href} passHref>
      <MuiLink {...extra}>{children}</MuiLink>
    </NextLink>
  );
};
