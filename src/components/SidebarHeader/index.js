import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link';

import { ThemeConsumer } from '../../contexts/Theme';


const styles = theme => ({
  root: theme.mixins.toolbar,
});


class SidebarHeader extends React.PureComponent {
  render() {
    const { classes, toggleDrawer, width } = this.props;
    return (
      <Toolbar>
        <Grid container alignItems="center" className={classes.root} justify="space-between">
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
          <ThemeConsumer>
            {theme => <Switch checked={theme.state.isDark} onChange={theme.toggle} />}
          </ThemeConsumer>
        </Grid>
      </Toolbar>
    );
  }
}


export default withWidth()(withStyles(styles)(SidebarHeader));
