import React from 'react';
import Articles from '../components/Articles';
import Paper from '../components/Paper';
import Welcome from '../components/Welcome';


export default function PageHome() {
  return (
    <>
      <Paper children={<Welcome />} />
      <Paper children={<Articles />} />
    </>
  );
}
