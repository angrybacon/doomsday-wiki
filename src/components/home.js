import React from 'react';
import ReactMarkdown from 'react-markdown';

import home from '../pages/home.md';

class Home extends React.Component {
  render() {
    return (
      <ReactMarkdown source={home} />
    );
  }
}

export default Home;
