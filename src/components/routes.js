import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Markdown from './markdown';
import Page from './page';


class Routes extends React.Component {
  render() {
    const routes = [
      {path: '/',           exact: true,  components: [<Markdown source="home.md" />]},
      {path: '/archives/',  exact: true,  components: [<Markdown source="articles.md" />]},
      {path: '/archives/',                components: [<Page />]},
    ].map((it, index) => <Route exact={it.exact} key={index} path={it.path} render={
      () => <Grid container children={it.components.map(
        (it, index) => (
          <Grid item children={<Paper children={it} component="article" />} key={index} />
        )
      )} direction="column" wrap="nowrap" />
    } />);
    return <Switch children={routes} />;
  }
}


export default Routes;
