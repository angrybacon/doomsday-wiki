import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Articles from '../components/Articles';
import Paper from '../components/Paper';
import Welcome from '../components/Welcome';


export default function PageHome() {
  return (
    <>
      <Box mb={1} ml={1}>
        <Typography children="Welcome" color="textSecondary" variant="subtitle1" />
      </Box>
      <Box children={<Paper children={<Welcome />} />} mb={3} />
      <Box mb={1} ml={1}>
        <Typography children="Recent Articles" color="textSecondary" variant="subtitle1" />
      </Box>
      <Box children={<Articles top />} mb={3} />
    </>
  );
}
