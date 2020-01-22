import Paper from '@material-ui/core/Paper';
import React from 'react';

import Articles from '../Articles';
import Welcome from '../Welcome';


export default function PageHome() {
  return (
    <>
      <Paper children={<Welcome />} />
      <Paper children={<Articles />} />
    </>
  );
}
