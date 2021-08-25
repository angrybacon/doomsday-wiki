import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Card } from '@/components/Card/Card';
import { useStyles } from '@/components/Remark/renderers/Pile.styles';

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & { properties: { cards: string[] } };
}

export const Pile: FunctionComponent<Props> = ({ node }) => {
  const classes = useStyles();
  const cards = node.properties?.cards ?? [];
  return (
    <div className={classes.root}>
      {cards.map((query) => (
        <div className={classes.card}>
          <Card query={query} />
        </div>
      ))}
    </div>
  );
};
