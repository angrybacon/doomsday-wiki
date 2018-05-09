import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { AppBar, Grid, Tab, Tabs, Toolbar, Typography, withStyles } from 'material-ui';
import { Folder, Home, Puzzle } from 'mdi-material-ui';

const styles = theme => ({
  tabs: {...theme.mixins.toolbar},
});

class Header extends React.Component {

  state = {currentTab: undefined};

  changeTab = (event, value) => {
    this.setState({currentTab: value});
  };

  render() {
    const { classes, location } = this.props;
    const tabs = [
      {icon: <Home />,    to: '/',           value: '/'},
      {icon: <Folder />,  to: '/articles/',  value: '/articles/'},
      {icon: <Puzzle />,  to: '/puzzles/',   value: '/puzzles/'},
    ];
    let { currentTab } = this.state;
    currentTab = location.pathname;

    return (
      <AppBar component="div" position="static">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item children={<Typography children="ddft.wiki" color="inherit" variant="title" />} />
            <Grid item>
              <Tabs children={tabs.map(function(tab, index) {
                      return <Tab key={index} className={classes.tabs} component={Link} {...tab} />;
                    })}
                    className={classes.tabs} onChange={this.changeTab} value={currentTab} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Header));
