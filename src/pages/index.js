import Paper from '@material-ui/core/Paper';
import React from 'react';

import Articles from '../components/Articles';
import Welcome from '../components/Welcome';


export default function PageHome() {
  return (
    <>
      <Paper children={<Welcome />} />
      <Paper children={<Articles />} />
    </>
  );
}
