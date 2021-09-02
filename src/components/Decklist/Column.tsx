import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import type { Card } from '@/tools/decklists/types';
import { useStyles } from './Column.styles';

interface Props {
  cards: Card[];
}

export const Column: FunctionComponent<Props> = ({ cards }) => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {cards.map(([quantity, name]) => (
        <li className={classes.line} key={`column-card-${quantity}-${name}`}>
          <Typography className={classes.quantity} variant="body2">
            {quantity}
          </Typography>
          <Typography variant="body2">{name}</Typography>
        </li>
      ))}
    </ul>
  );
};
