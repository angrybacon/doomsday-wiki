import React from 'react';
import Articles from '../components/Articles';
import Paper from '../components/Paper';
import Welcome from '../components/Welcome';
import useStyles from './styles';


export default function PageHome() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper children={<Welcome />} />
      <Paper children={<Articles />} />
    </div>
  );
}
