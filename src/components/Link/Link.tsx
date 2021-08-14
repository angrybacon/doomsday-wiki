import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React, { FunctionComponent } from 'react';

interface Props extends NextLinkProps {
  href: string;
}

export const Link: FunctionComponent<Props> = ({ href, ...rest }) => (
  <NextLink href={href} {...rest} />
);
