import React from 'react';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from './markdown';


const styles = theme => ({
  root: theme.mixins.padding({y: true}),
});


class Page extends React.Component {
  render() {
    const { classes, match } = this.props;
    return (
      <Paper children={<Markdown match={match} />} className={classes.root} component="article" />
    );
  }
}


export default withStyles(styles)(Page);
