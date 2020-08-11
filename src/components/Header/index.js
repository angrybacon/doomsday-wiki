import MenuIcon from 'mdi-react/MenuIcon';
import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SidebarContext } from '../../contexts/Sidebar';
import useStyles from './styles';

export default function Header() {
  const { toggleDrawer } = useContext(SidebarContext);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.mixins.sidebar.treshold);
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid container alignItems="center" wrap="nowrap">
          {isMobile && (
            <Grid item style={{marginRight: '1em'}}>
              <IconButton color="inherit" onClick={toggleDrawer()}><MenuIcon /></IconButton>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
