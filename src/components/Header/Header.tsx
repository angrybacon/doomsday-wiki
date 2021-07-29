import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export const Header: FunctionComponent = () => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Toolbar>This is the header</Toolbar>
      </AppBar>
    </Slide>
  );
};
