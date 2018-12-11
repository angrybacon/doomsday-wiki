import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Authors from '../Authors';
import Markdown from '../Markdown';
import Page from '../Page';
import Puzzle from '../Puzzle';
import Puzzles from '../Puzzles';


class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Grid container direction="column" wrap="nowrap">
            <Grid item>
              <Paper children={<Markdown source="home.md" />} component="article" />
            </Grid>
            <Grid item>
              <Paper children={<Markdown source="articles.md" />} component="article" />
            </Grid>
          </Grid>
        </Route>
        <Route exact children={<Authors />} path="/authors/" />
        <Route exact component={Page} path="/appendices/:page/" />
        <Route exact component={Page} path="/articles/:year/:month/:page/" />
        <Route exact component={Page} path="/chapters/:chapter/:page/" />
        <Route exact component={Puzzles} path="/puzzles/:tier/" />
        <Route exact component={Puzzle} path="/puzzles/:tier/:puzzle/" />
      </Switch>
    );
  }
}


export default Routes;
