import React from 'react';
import c from 'classnames';
import Divider from '@material-ui/core/Divider';
import useStyles from '../styles';

export default function ThematicBreak() {
  const classes = useStyles();
  return <Divider className={c(classes.barf, classes.divider)} />;
}
