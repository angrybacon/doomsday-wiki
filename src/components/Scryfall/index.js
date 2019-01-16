import React from 'react';

import Card from '../Card';
import Prettylink from '../Prettylink';


class Scryfall extends React.PureComponent {
  render() {
    let { query } = this.props;
    query = query.trim();
    const image = query.startsWith('!');
    return query ? (image ? <Card query={query} /> : <Prettylink children={query} href="" />) : null;
  }
}


export default Scryfall;
