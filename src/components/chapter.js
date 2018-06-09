import React from 'react';

import Typography from '@material-ui/core/Typography';

import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Page from './page';
import PrettyLink from './prettylink';


class Chapter extends React.Component {
  render() {

    const links = [
      {text: 'Basics',      href: '/archives/1/basics/'},
      {text: 'Brainstorm',  href: '/archives/1/brainstorm/'},
    ].map(it => <li><PrettyLink children={it.text} component={Link} href={it.href} /></li>);

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
