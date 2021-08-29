import c from 'classnames';
import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Card } from '@/components/Card/Card';
import { useStyles } from './RemarkRow.styles';

enum Variant {
  CENTERED = 'centered',
  PILE = 'pile',
}

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & {
    properties: {
      cards: { id?: string; query: string }[];
      variant?: Variant;
    };
  };
}

export const RemarkRow: FunctionComponent<Props> = ({ node }) => {
  const classes = useStyles();
  const { cards = [], variant = Variant.CENTERED } = node.properties;
  const variantClass = Object.values(Variant).includes(variant)
    ? variant
    : Variant.CENTERED;
  return (
    <div className={c(classes.root, classes[variantClass])}>
      {cards.map(({ id, query }) => (
        <div className={classes.card} key={id}>
          <Card query={query} />
        </div>
      ))}
    </div>
  );
};
