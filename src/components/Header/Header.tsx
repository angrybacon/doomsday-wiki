import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import { Theme, makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme: Theme) => ({
  bar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export const Header: FunctionComponent = () => {
  const trigger = useScrollTrigger();
  const classes = useStyles();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className={classes.bar}>
        <Toolbar>This is the header</Toolbar>
      </AppBar>
    </Slide>
  );
};
