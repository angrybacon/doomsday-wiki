import React from 'react';

import Application from '../components/Application';
import PagePuzzles from '../components/PagePuzzles';


export default function RoutePuzzles() {
  return <Application children={<PagePuzzles />} />;
}
