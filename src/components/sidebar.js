import React from 'react';

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';

import Link from 'react-router-dom/Link';

import Markdown from './markdown';
import MENU from '../menu';


const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
  },
  paper: {marginBottom: 0, padding: theme.spacing.unit * 3},
  title: theme.mixins.toolbar,
});


class Sidebar extends React.Component {

  state = {menuItems: {}};

  toggleMenuItem = index => () => {
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.menuItems[index] = !newState.menuItems[index];
      return newState;
    });
  };

  render() {

    const { classes, changeTheme, component, drawerProps } = this.props;

    const menu = MENU.map((chapter, index) => {
      const labels = chapter.label.split(',');
      const routes = chapter.routes.map((it, index) => (
        <ListItem button
                  children={<ListItemText primary={it.text} />}
                  component={it.href ? Link : 'div'}
                  dense
                  disabled={!it.href || it.href.startsWith('http')}
                  key={index}
                  to={it.href} />
      ));
      return (
        <div key={index}>
          <ListItem button dense onClick={this.toggleMenuItem(index)}>
            <ListItemIcon children={chapter.icon} />
            <ListItemText primary={labels[0]} secondary={labels[1]} />
          </ListItem>
          <Collapse in={this.state.menuItems[index]} timeout="auto">
            <Divider />
            <List children={routes} />
            <Divider />
          </Collapse>
        </div>
      );
    });

    const drawer = (
      <Grid container direction="column" wrap="nowrap">
        <Hidden smDown>
          <Grid item>
            <Toolbar>
              <Grid container alignItems="center" className={classes.title} justify="space-between">
                <Grid item>
                  <Link children={<Button children="ddft.wiki" className={classes.home} size="large" />}
                        style={{textDecoration: 'none'}}
                        to="/" />
                </Grid>
                <Switch onChange={changeTheme()} />
              </Grid>
            </Toolbar>
          </Grid>
          <Divider />
        </Hidden>
        <Grid item className={classes.body}>
          <List children={menu} component="nav" />
          <Divider />
          <Markdown source="notation.md" />
          <Paper children={<Markdown source="links.md" />} className={classes.paper} elevation={0} />
        </Grid>
      </Grid>
    );

    return React.createElement(
      component ? component : Drawer,
      // NOTE: Style is currently being overwritten by SwipeableDrawer.
      //       https://github.com/mui-org/material-ui/issues/11799
      {PaperProps: {style: {padding: 0}}, ...drawerProps},
      drawer,
    );
  }
}


export default withStyles(styles)(Sidebar);
