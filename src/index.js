import React from 'react';
import { render } from 'react-dom';

import { Grid } from 'material-ui';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header, Markdown } from './components';

import 'typeface-roboto';
import './styles/index.css';

function Popin() {
  return (
    <Router>
      <Grid container direction="column" spacing={0} style={{minWidth: 400}} wrap="nowrap">
        <Grid item component="header"><Header /></Grid>
        <Grid item style={{flexShrink: 1, height: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
          <Route exact path="/" render={() => <Markdown source="home.md"/>}/>
          <Route exact path="/articles/" render={() => <Markdown source="articles.md"/>}/>
          <Route exact path="/puzzles/" render={() => <Markdown source="puzzles.md"/>}/>
        </Grid>
      </Grid>
    </Router>
  );
}

const root = document.getElementById('root');
if (root) {
  render(<Popin />, root);
}
