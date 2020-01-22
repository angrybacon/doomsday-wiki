import React from 'react';

import Application from '../components/Application';
import PageHome from '../components/PageHome';


export default function RouteIndex() {
  return <Application children={<PageHome />} />;
}
