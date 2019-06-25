import { StaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
// import BrowserRouter from 'react-router-dom/BrowserRouter';

import Header from './Header';
import Prettylink from './Prettylink';
// import Routes from '../Routes';
import Sidebar from './Sidebar';

import '../reset.scss';


const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 3,
    },
  },
  children: {
    flexGrow: 1,
  },
  content: {
    height: '100%',
  },
  footer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 3,
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
    const application = data => (
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
                <Typography children={data.site.siteMetadata.title} variant="h3" />
                {/* <Routes /> */}
                {this.props.children}
              </Grid>
              <Grid item className={classes.footer}>
                <Typography align="center" component="footer">
                  Copyright &copy; 2019&nbsp;
                  <Prettylink children="ddft.wiki contributors" href="/authors/" />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
    return <StaticQuery query={graphql `query {site {siteMetadata {title}}}`} render={application} />;
  }
}


export default withStyles(styles)(Layout);
