import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Page from './page';


const styles = theme => ({
  title: theme.mixins.toolbar,
});


class Sidebar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer PaperProps={{style: {padding: 0}}} {...this.props}>
        <Grid container className={classes.title} direction="column" justify="center">
          <Grid item style={{marginLeft: '1em'}}>
            <Typography children="ddft.wiki" variant="title" />
            <Typography children="v0.1" />
          </Grid>
        </Grid>
        <Divider />
        <div style={{overflowY: 'auto'}}>
          <Paper children={<Page source="links.md" />} elevation={0} />
          <Divider />
          <Page source="notation.md" />
        </div>
      </Drawer>
    );
  }
}


export default withStyles(styles)(Sidebar);
