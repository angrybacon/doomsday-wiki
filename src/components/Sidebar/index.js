import React, { useContext, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useLocation } from '@reach/router';
import { SidebarContext } from '../../contexts/Sidebar';
import Body from './Body';
import Entries from './Entries';
import Header from './Header';
import useStyles from './styles';

export default function Sidebar() {

  const { drawer: drawerIsOpen, toggleDrawer } = useContext(SidebarContext);
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.mixins.sidebar.treshold);

  const content = (
    <Grid container className={classes.root} direction="column" wrap="nowrap">
      <Grid item><Header /></Grid>
      <Divider />
      <Grid item className={classes.body}>
        <Box my={1}><Entries /></Box>
        <Box my={1}><Body /></Box>
      </Grid>
    </Grid>
  );

  const drawer = (
    <SwipeableDrawer
      classes={{paper: classes.drawerTemporary}}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      open={drawerIsOpen}
    >
      {content}
    </SwipeableDrawer>
  );

  const drawerFixed = (
    <Drawer classes={{paper: classes.drawerFixed}} variant="permanent">{content}</Drawer>
  );

  useEffect(() => {
    toggleDrawer(false)();
  }, [location, toggleDrawer]);

  return isMobile ? drawer : drawerFixed;
}
