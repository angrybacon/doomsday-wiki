import React, { Children } from 'react';
import { Mana as M } from '@saeris/react-mana';
import useStyles from './styles';


// NOTE: There doesn't seem to be a good way to read a custom HTML node children
//       directly using react-markdown so the mana symbol is passed through the
//       children property.


export default function Mana({ children }) {
  const classes = useStyles();
  const result = Children.toArray(children).reduce((accumulator, it) => {
    return accumulator.concat((it.props.children || '').toString());
  }, '').toLowerCase();
  return <M className={classes.root} cost fixed symbol={result} />;
}
