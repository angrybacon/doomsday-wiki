import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';

import Header from '../Header';
import Prettylink from '../Prettylink';
import Sidebar from '../Sidebar';

import '../../reset.scss';


const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
    },
  },
  children: {
    flexGrow: 1,
  },
  content: {
    height: '100%',
  },
  footer: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
  },
  main: {
    height: '100%',
    paddingLeft: theme.mixins.sidebar.width,
    width: '100%',
    [theme.breakpoints.down(theme.mixins.sidebar.treshold)]: {
      paddingLeft: 0,
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    minWidth: 320,
  },
});


class Layout extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Sidebar />
        <Grid container className={classes.main} direction="column" wrap="nowrap">
          <Grid item children={<Header component="header" />} />
          <Grid item className={classes.body}>
            <Grid container
                  alignItems="center"
                  className={classes.content}
                  direction="column"
                  wrap="nowrap">
              <Grid item className={classes.children} xs={12} sm={11} md={10} lg={8} xl={6}>
                {this.props.children}
              </Grid>
              <Grid item className={classes.footer}>
                <Typography align="center" color="textSecondary" component="footer">
                  Copyright &copy; 2019&nbsp;
                  <Prettylink children="ddft.wiki contributors" href="/authors/" />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(Layout);
