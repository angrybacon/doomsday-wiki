import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Prettylink from '../Prettylink';
import puzzles from '../../menu';


class Puzzles extends React.PureComponent {
  render() {
    const { match } = this.props;
    const items = (puzzles.find(it => it.href === match.url) || {routes: []}).routes.map(
      route => <li key={route.href}><Prettylink children={route.text} href={route.href} /></li>
    );
    return <Paper children={<Typography children={items} component="ul" />} component="article" />;
  }
}


export default Puzzles;
