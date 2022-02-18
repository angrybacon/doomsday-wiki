import React, { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import type { Card } from '@/tools/decklists/types';
import { useStyles } from './Column.styles';

export interface Props {
  cards: Card[];
}

export const Column: FunctionComponent<Props> = ({ cards }) => {
  const classes = useStyles();
  if (!cards.length) return null;
  return (
    <ul className={classes.root}>
      {cards.map(([quantity, name]) => (
        <li className={classes.line} key={`card-${quantity}-${name}`}>
          <Typography
            className={classes.quantity}
            component="span"
            variant="body2"
          >
            {quantity}
          </Typography>
          <Typography component="span" variant="body2">
            {name}
          </Typography>
        </li>
      ))}
    </ul>
  );
};
