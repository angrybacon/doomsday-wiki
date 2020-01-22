import React from 'react';

import Application from '../components/Application';
import PageAuthors from '../components/PageAuthors';


export default function RouteAuthors() {
  return <Application children={<PageAuthors />} />;
}
