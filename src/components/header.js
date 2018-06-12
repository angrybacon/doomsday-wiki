import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';

import Folder from 'mdi-material-ui/Folder';
import Home from 'mdi-material-ui/Home';
import Menu from 'mdi-material-ui/Menu';

import withRouter from 'react-router-dom/withRouter';
import Link from 'react-router-dom/Link';


const styles = theme => ({
  home: {color: theme.palette.primary.contrastText},
  root: {margin: 0, padding: 0},
  tabs: theme.mixins.toolbar,
});


class Header extends React.Component {

  state = {currentTab: undefined};

  changeTab = (event, value) => this.setState({currentTab: value});

  render() {

    const { classes, location, toggleDrawer } = this.props;
    const tabs = [
      {icon: <Home />,    to: '/',           value: ''},
      {icon: <Folder />,  to: '/archives/',  value: 'archives'},
    ].map(it => <Tab {...it} key={it.to} className={classes.tabs} component={Link} />);
    this.state.currentTab = location.pathname.substring(1).split('/')[0];

    return (
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
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
            <Grid item>
              <Tabs children={tabs}
                    className={classes.tabs}
                    onChange={this.changeTab}
                    value={this.state.currentTab} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}


export default withRouter(withStyles(styles)(Header));
