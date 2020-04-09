import PropTypes from 'prop-types';
import React from 'react';
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
        <Grid item children={<Header component="header" />} />
        <Grid item className={classes.body}>
          <Grid container
                alignItems="center"
                className={classes.content}
                direction="column"
                id="body"
                wrap="nowrap">
            <Grid item children={children} className={classes.children} xs={12} md={10} />
            <Grid item className={classes.footer}>
              <Typography align="center" color="textSecondary" component="footer">
                Copyright &copy; 2020&nbsp;
                <Prettylink children="ddft.wiki contributors" href="/authors/" />
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
