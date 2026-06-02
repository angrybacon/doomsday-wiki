'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

type Props = ComponentPropsWithoutRef<typeof MuiLink> & {
  href: string;
};

export const Link = ({ href, ...rest }: Props) => {
  const extra =
    href.startsWith('http') || href.startsWith('/discord')
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
