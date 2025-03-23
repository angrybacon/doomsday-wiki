import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import { type ComponentProps } from 'react';

type Props = ComponentProps<typeof MuiLink> & {
  href: string;
};

export const Link = (props: Props) => {
  const extra = props.href.startsWith('http')
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {};
  return (
    <MuiLink color="secondary" component={NextLink} {...extra} {...props} />
  );
};
