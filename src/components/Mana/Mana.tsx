import c from 'classnames';
import React, { FunctionComponent } from 'react';
import { useStyles } from './Mana.styles';
import 'mana-font/css/mana.min.css';

interface Props {
  pattern: string;
}

export const Mana: FunctionComponent<Props> = ({ pattern }) => {
  const classes = useStyles();
  return <i className={c(classes.root, `ms ms-cost ms-${pattern}`)} />;
};
