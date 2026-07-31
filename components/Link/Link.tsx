'use client';

import type { SxProps } from '@mui/material';
import type { LinkProps } from 'next/link';
import type { PropsWithChildren } from 'react';

import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

type Props = PropsWithChildren<LinkProps> & { sx?: SxProps };

export const Link = ({ href, ...rest }: Props) => {
  const source = typeof href === 'string' ? href : href.pathname;
  const extra =
    source?.startsWith('http') || source?.startsWith('/discord')
      ? { rel: 'noopener noreferrer', target: '_blank' }
      : {};
  return (
    <MuiLink
      color="secondary"
      component={NextLink}
      href={href}
      {...extra}
      {...rest}
    />
  );
};
