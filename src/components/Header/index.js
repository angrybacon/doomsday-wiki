import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from 'mdi-react/MenuIcon';
import React, { useContext } from 'react';

import { SidebarContext } from '../../contexts/Sidebar';
import useStyles from './styles';


export default function Header() {
  const { toggleDrawer } = useContext(SidebarContext);
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid container alignItems="center" wrap="nowrap">
          <Hidden mdUp>
            <Grid item style={{marginRight: '1em'}}>
              <IconButton children={<MenuIcon />} color="inherit" onClick={toggleDrawer()} />
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
