import React from 'react';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from '../Markdown';


const styles = () => ({
  root: {overflowX: 'hidden'},
});


class Page extends React.PureComponent {
  render() {
    const { classes, match } = this.props;
    return (
      <Paper className={classes.root} component="article">
        <Markdown gutter match={match} />
      </Paper>
    );
  }
}


export default withStyles(styles)(Page);
