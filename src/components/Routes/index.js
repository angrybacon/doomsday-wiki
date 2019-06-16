import React from 'react';

import Paper from '@material-ui/core/Paper';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Authors from '../Authors';
import Markdown from '../Markdown';
import Page from '../Page';
import Page404 from '../Page404';
import Puzzle from '../Puzzle';
import Puzzles from '../Puzzles';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <React.Fragment>
            <Paper children={<Markdown source="home.md" />} component="article" />
            <Paper children={<Markdown source="articles.md" />} component="article" />
          </React.Fragment>
        </Route>
        <Route exact children={<Authors />} path="/authors/" />
        <Route exact component={Page} path="/appendices/:page/" />
        <Route exact component={Page} path="/articles/:year/:month/:page/" />
        <Route exact component={Page} path="/chapters/:chapter/:page/" />
        <Route exact component={Puzzles} path="/puzzles/:tier/" />
        <Route exact component={Puzzle} path="/puzzles/:tier/:puzzle/" />
        <Route component={Page404} />
      </Switch>
    );
  }
}


export default Routes;
