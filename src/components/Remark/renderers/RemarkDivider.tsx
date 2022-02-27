import React, { FunctionComponent } from 'react';
import Divider from '@mui/material/Divider';
import { useStyles } from './RemarkDivider.styles';

export const RemarkDivider: FunctionComponent = () => {
  const classes = useStyles();
  return <Divider className={classes.root} />;
};
