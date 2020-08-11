import React from 'react';
import Articles from '../components/Articles';
import Paper from '../components/Paper';

export default function PageHome() {
  return <Paper children={<Articles />} />;
}
