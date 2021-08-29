import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import MuiLink from '@material-ui/core/Link';
import { SHORTHANDS } from '@/tools/scryfall/cards';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & { properties: { card: string } };
}

export const RemarkCard: FunctionComponent<Props> = ({ node }) => {
  let name: string = node.properties?.card;
  name = SHORTHANDS[name] || name;
  return (
    <NextLink href={`${SCRYFALL_SEARCH}?q=${name}`} passHref>
      <MuiLink rel="noopener noreferrer" target="_blank">
        {name}
      </MuiLink>
    </NextLink>
  );
};
