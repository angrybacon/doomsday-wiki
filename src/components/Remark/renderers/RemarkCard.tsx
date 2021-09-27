import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import MuiLink from '@material-ui/core/Link';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

export interface Props extends ReactMarkdownProps {
  name?: string;
}

export const RemarkCard: FunctionComponent<Props> = ({ name }) => {
  if (!name) return null;
  return (
    <NextLink href={`${SCRYFALL_SEARCH}?q=${name}`} passHref>
      <MuiLink rel="noopener noreferrer" target="_blank">
        {name}
      </MuiLink>
    </NextLink>
  );
};
