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
import { SidebarConsumer } from '../../contexts/Sidebar';


const styles = theme => ({
  activeLink: {backgroundColor: theme.palette.action.selected},
});


class SidebarMenu extends React.PureComponent {

  state = {entries: {}};

  toggleEntry = index => () => {
    this.setState(state => ({entries: {...state.entries, [index]: !state.entries[index]}}));
  };

  render() {
    const { classes } = this.props;
    const { entries } = this.state;
    return (
      <List component="nav">
        {menu.map((chapter, index) => {
          const [primary, secondary] = chapter.label.split(',');
          const routes = chapter.routes || [];
          return (
            <SidebarConsumer key={index}>
              {({toggleDrawer}) => (
                <div>
                  <ListItem button dense disabled={!routes.length} onClick={this.toggleEntry(index)}>
                    <ListItemIcon children={chapter.icon} />
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                  <Collapse in={entries[index]} timeout="auto">
                    <Divider />
                    <List>
                      {routes.map((it, index) => (
                        <ListItem activeClassName={classes.activeLink}
                                  button
                                  component={NavLink}
                                  dense
                                  key={index}
                                  onClick={toggleDrawer(false)}
                                  to={it.href}>
                          <ListItemText primary={it.text} />
                        </ListItem>
                      ))}
                    </List>
                    <Divider />
                  </Collapse>
                </div>
              )}
            </SidebarConsumer>
          );
        })}
      </List>
    );
  }
}


export default withStyles(styles)(SidebarMenu);
