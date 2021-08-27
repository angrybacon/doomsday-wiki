import c from 'classnames';
import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Card } from '@/components/Card/Card';
import { useStyles } from '@/components/Remark/renderers/Row.styles';

interface Card {
  id?: number;
  query: string;
}

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & {
    properties: { cards: Card[]; variant?: string };
  };
}

export const Row: FunctionComponent<Props> = ({ node, ...rest }) => {
  const classes = useStyles();
  const { cards = [], variant = 'pile' } = node.properties;
  return (
    <div className={c(classes.root, classes?.[variant])}>
      {cards.map(({ id, query }) => (
        <div className={classes.card} key={id}>
          <Card query={query} />
        </div>
      ))}
    </div>
  );
};
