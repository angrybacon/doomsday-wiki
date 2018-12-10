import React from 'react';

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import withStyles from '@material-ui/core/styles/withStyles';

import Link from 'react-router-dom/Link';
import NavLink from 'react-router-dom/NavLink';

import Markdown from '../Markdown';
import { ThemeConsumer } from '../../contexts/Theme';
import { MENU } from '../../menu';


const styles = theme => ({
  activeLink: {backgroundColor: theme.palette.action.selected},
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
  },
  padding: {padding: theme.spacing.unit * 3},
  title: theme.mixins.toolbar,
});


class Sidebar extends React.PureComponent {

  state = {menuItems: {}};

  toggleMenuItem = index => () => {
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.menuItems[index] = !newState.menuItems[index];
      return newState;
    });
  };

  render() {

    const { classes, component, drawerProps, toggleDrawer, width } = this.props;

    const menu = MENU.map((chapter, index) => {
      const labels = chapter.label.split(',');
      const routes = (chapter.routes || []).map((it, index) => (
        <ListItem activeClassName={classes.activeLink}
                  button
                  children={<ListItemText primary={it.text} />}
                  component={NavLink}
                  dense
                  key={index}
                  onClick={toggleDrawer}
                  to={it.href} />
      ));
      return (
        <div key={index}>
          <ListItem button dense disabled={!routes.length} onClick={this.toggleMenuItem(index)}>
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
      <ThemeConsumer>
        {theme => (
          <Grid container direction="column" wrap="nowrap">
            <Grid item>
              <Toolbar>
                <Grid container alignItems="center" className={classes.title} justify="space-between">
                  <Grid item>
                    <Link style={{textDecoration: 'none'}} to="/">
                      <Button children="ddft.wiki"
                              color="primary"
                              onClick={toggleDrawer}
                              size={isWidthDown('sm', width) ? 'small' : 'medium'}
                              style={{boxShadow: 'none'}}
                              variant="contained"/>
                    </Link>
                  </Grid>
                  <Switch checked={theme.state.isDark} onChange={theme.toggle} />
                </Grid>
              </Toolbar>
            </Grid>
            <Divider />
            <Grid item className={classes.body}>
              <List children={menu} component="nav" />
              <Divider />
              <Markdown source="notation.md" tableCellProps={{padding: 'dense'}} />
              <Markdown className={classes.padding} noPadding source="links.md" />
            </Grid>
          </Grid>
        )}
      </ThemeConsumer>
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


export default withWidth()(withStyles(styles)(Sidebar));
