import React from 'react';
import useStyles from './styles';


export default function Quote({ ...rest }) {
  const classes = useStyles();
  return <blockquote className={classes.root} {...rest} />;
}
