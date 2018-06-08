import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Folder from 'mdi-material-ui/Folder';
import Home from 'mdi-material-ui/Home';
import Menu from 'mdi-material-ui/Menu';
import Puzzle from 'mdi-material-ui/Puzzle';

import withRouter from 'react-router-dom/withRouter';
import Link from 'react-router-dom/Link';


const styles = theme => ({
  root: {padding: 0},
  tabs: {...theme.mixins.toolbar},
});


class Header extends React.Component {

  state = {currentTab: undefined};

  changeTab = (event, value) => {
    this.setState({currentTab: value});
  };

  render() {

    const { classes, location, toggleDrawer } = this.props;
    const tabs = [
      {icon: <Home />,    to: '/',           value: '/'},
      {icon: <Folder />,  to: '/archives/',  value: '/archives/'},
      // {icon: <Puzzle />,  to: '/puzzles/',   value: '/puzzles/'},
    ].map((it, index) => <Tab {...it} key={index} className={classes.tabs} component={Link} />);
    this.state.currentTab = location.pathname;

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
                  <Grid item style={{marginLeft: '1em'}}>
                    <Typography children="ddft.wiki" color="inherit" variant={'title'} />
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
