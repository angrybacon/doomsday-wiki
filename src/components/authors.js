import React from 'react';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Markdown from './markdown';


const styles = theme => ({
  paper: theme.mixins.padding({y: true}),
});


class Authors extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper children={<Markdown source="authors/bennotsi.md" />} className={classes.paper} />
        <Paper children={<Markdown source="authors/d8dk32.md" />} className={classes.paper} />
        <Paper children={<Markdown source="authors/doishy.md" />} className={classes.paper} />
        <Paper children={<Markdown source="authors/emidln.md" />} className={classes.paper} />
      </div>
    );
  }
}


export default withStyles(styles)(Authors);
