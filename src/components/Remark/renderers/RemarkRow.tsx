import c from 'classnames';
import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Card } from '@/components/Card/Card';
import type { ScryDataItem } from '@/tools/scryfall/types';
import { useStyles } from './RemarkRow.styles';

enum Variant {
  CENTERED = 'centered',
  PILE = 'pile',
}

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & {
    properties: {
      cards: { data: ScryDataItem; id?: string }[];
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
    <div className={classes.root}>
      <div className={c(classes.container, classes[variantClass])}>
        {cards.map(({ data, id }) => (
          <div className={classes.card} key={id}>
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};
