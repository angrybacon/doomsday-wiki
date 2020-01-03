import React from 'react';

import Application from '../components/Application';
import PuzzlesPage from '../components/PuzzlesPage';


export default class Puzzles extends React.PureComponent {
  render() {
    return <Application children={<PuzzlesPage />} />;
  }
}
