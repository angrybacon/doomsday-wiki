import React from 'react';
import useStyles from '../styles';


export default function Image(rest) {
  const classes = useStyles();
  return <img {...rest} className={classes.image} />;
}
