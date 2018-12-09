import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Prettylink from '../Prettylink';
import { PUZZLES } from '../../menu';


class Puzzles extends React.Component {
  render() {
    const { match } = this.props;
    const puzzles = (PUZZLES.find(it => it.href === match.url) || {routes: []}).routes.map(
      route => <li key={route.href}><Prettylink children={route.text} href={route.href} /></li>
    );
    return <Paper childre={<Typography children={puzzles} component="ul" />} component="article" />;
  }
}


export default Puzzles;
