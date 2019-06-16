import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  root: {
    height: '100%',
  },
  text: {
    color: theme.palette.text.secondary,
    fontSize: '20vw',
    [theme.breakpoints.down(theme.mixins.sidebar.treshold)]: {
      fontSize: '40vw',
    },
  },
});


class Page404 extends React.PureComponent {
  render() {
    const { classes, match } = this.props;
    return (
      <Grid container alignItems="center" className={classes.root}>
        <Grid item children={<Typography children="404" className={classes.text} />} />
      </Grid>
    );
  }
}


export default withStyles(styles)(Page404);
