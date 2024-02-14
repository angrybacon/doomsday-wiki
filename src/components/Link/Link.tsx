import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import { FunctionComponent, ReactNode } from 'react';

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
    <MuiLink {...extra} component={NextLink} href={href}>
      {children}
    </MuiLink>
  );
};
