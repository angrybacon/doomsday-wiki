import React from 'react';

import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import NavLink from 'react-router-dom/NavLink';

import menu from '../../menu';


const styles = theme => ({
  activeLink: {backgroundColor: theme.palette.action.selected},
});


class SidebarMenu extends React.PureComponent {
  render() {
    const { classes, menuItems, toggleDrawer, toggleMenuItem } = this.props;
    const items = menu.map((chapter, index) => {
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
          <ListItem button dense disabled={!routes.length} onClick={toggleMenuItem(index)}>
            <ListItemIcon children={chapter.icon} />
            <ListItemText primary={labels[0]} secondary={labels[1]} />
          </ListItem>
          <Collapse in={menuItems[index]} timeout="auto">
            <Divider />
            <List children={routes} />
            <Divider />
          </Collapse>
        </div>
      );
    });
    return <List children={items} component="nav" />;
  }
}


export default withStyles(styles)(SidebarMenu);
