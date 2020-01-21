import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';


const styles = theme => ({
  root: {
    borderLeftColor: theme.palette.primary[{dark: 'light', light: 'dark'}[theme.palette.type]],
    borderLeftStyle: 'solid',
    borderLeftWidth: 2,
    margin: '1em 0',
    paddingBottom: '1em',
    paddingLeft: '1em',
    paddingTop: '1em',
  },
});


class Quote extends React.PureComponent {
  render() {
    const { classes, ...properties } = this.props;
    return <blockquote className={classes.root} {...properties} />;
  }
}


export default withStyles(styles)(Quote);
