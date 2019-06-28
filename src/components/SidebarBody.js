import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Markdown from './Markdown';


export default class SidebarBody extends React.PureComponent {
  render() {
    const query = graphql`{
      file(relativePath: {eq: "notation.md"}) {childMarkdownRemark {rawMarkdownBody}}
    }`;
    return (
      <StaticQuery
        query={query}
        render={({ file }) => <Markdown source={file.childMarkdownRemark.rawMarkdownBody} />}
      />
    );
  }
}
