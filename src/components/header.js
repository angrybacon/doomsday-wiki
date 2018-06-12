import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';

import Menu from 'mdi-material-ui/Menu';

import Link from 'react-router-dom/Link';


const styles = theme => ({
  home: {color: theme.palette.primary.contrastText},
  root: {margin: 0, padding: 0},
});


class Header extends React.Component {
  render() {
    const { classes, toggleDrawer } = this.props;
    return (
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <Hidden mdUp>
                <Grid container alignItems="center">
                  <Grid item>
                    <IconButton children={<Menu />} color="inherit" onClick={toggleDrawer} />
                  </Grid>
                  <Grid item style={{marginLeft: '.5em'}}>
                    <Link children={<Button children="ddft.wiki" className={classes.home} size="small" />}
                          style={{textDecoration: 'none'}}
                          to="/" />
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}


export default withStyles(styles)(Header);
