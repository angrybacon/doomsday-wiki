import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import Prettylink from '../Prettylink';
import Sidebar from '../Sidebar';
import useStyles from './styles';

import '../../reset.scss';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <Grid container className={classes.main} direction="column" wrap="nowrap">
        <Grid item className={classes.header}><Header component="header" /></Grid>
        <Grid item className={classes.body}>
          <Grid
            container
            alignItems="center"
            className={classes.content}
            direction="column"
            id="body"
            wrap="nowrap"
          >
            <Grid item className={classes.children} md={10} xs={12}>{children}</Grid>
            <Grid item className={classes.footer}>
              <Typography align="center" color="textSecondary" component="footer">
                Copyright &copy; 2020&nbsp;
                <Prettylink href="/authors/">ddft.wiki contributors</Prettylink>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
