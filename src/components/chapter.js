import React from 'react';

import Typography from '@material-ui/core/Typography';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Page from './page';
import PrettyLink from './prettylink';

import routes from '../routes.js';


class Chapter extends React.Component {
  render() {

    const links = routes.map(chapter => chapter.routes.map(
      (it, index) => (
        it.href
          ? <li key={index}><PrettyLink children={it.text} href={it.href} /></li>
          : <li key={index}>{it.text}</li>
      )
    ));

    return (
      <Switch>
        <Route exact path="/archives/">
          <div>
            <Typography children="Chapters" component="h1" gutterBottom variant="display3" />
            <Typography children={links} component="ul" />
          </div>
        </Route>
        <Route component={Page} path="/archives/:chapter/:page/" />
      </Switch>
    );
  }
}


export default Chapter;
