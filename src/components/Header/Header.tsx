import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export const Header: FunctionComponent = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <AppBar elevation={trigger ? 4 : 0}>
      <Toolbar>This is the header</Toolbar>
    </AppBar>
  );
};
