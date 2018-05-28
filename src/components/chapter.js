import React from 'react';

import Typography from '@material-ui/core/Typography';

import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Page from './page';
import PrettyLink from './prettylink';


class Chapter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/archives/">
          <div>
            <Typography children="Chapters" component="h1" gutterBottom variant="display3" />
            <Typography component="ul">
              <li><PrettyLink component={Link} href="/archives/1/basics/">Basics</PrettyLink></li>
              <li><PrettyLink component={Link} href="/archives/1/brainstorm/">Brainstorm</PrettyLink></li>
            </Typography>
          </div>
        </Route>
        <Route component={Page} path="/archives/:chapter/:page/" />
      </Switch>
    );
  }
}


export default Chapter;
