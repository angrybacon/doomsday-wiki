import NextLink, { LinkProps } from 'next/link';
import React, { FunctionComponent } from 'react';

interface Props extends LinkProps {
  href: string;
}

export const Link: FunctionComponent<Props> = ({ href, ...rest }) => {
  return <NextLink href={href} {...rest} />;
};
