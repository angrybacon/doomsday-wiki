import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Markdown from './markdown';
import Page from './page';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <Grid container direction="column" wrap="nowrap">
            <Grid item children={<Paper children={<Markdown source="home.md" />} component="article" />} />
            <Grid item children={<Paper children={<Markdown source="articles.md" />} component="article" />} />
          </Grid>
        </Route>
        <Route children={<Paper children={<Page />} component="article" />} />
      </Switch>
    );
  }
}


export default Routes;
