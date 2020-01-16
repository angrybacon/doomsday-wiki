import React from 'react';

import Application from '../components/Application';
import PagePuzzles from '../components/PagePuzzles';


export default class Puzzles extends React.PureComponent {
  render() {
    return <Application children={<PagePuzzles />} />;
  }
}
