import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuIcon from 'mdi-react/MenuIcon';
// import withRouter from 'react-router-dom/withRouter';

// import Breadcrumbs from '../Breadcrumbs';
import { SidebarConsumer } from '../contexts/Sidebar';


const styles = theme => ({
  home: {color: theme.palette.primary.contrastText},
  root: {margin: 0, padding: 0},
});


class Header extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Grid container alignItems="center" wrap="nowrap">
            <Hidden mdUp>
              <Grid item style={{marginRight: '1em'}}>
                <SidebarConsumer>
                  {({toggleDrawer}) => (
                    <IconButton children={<MenuIcon />} color="inherit" onClick={toggleDrawer()} />
                  )}
                </SidebarConsumer>
              </Grid>
            </Hidden>
            {/* <Grid item children={<Breadcrumbs />} /> */}
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}


// export default withRouter(withStyles(styles)(Header));
export default withStyles(styles)(Header);
