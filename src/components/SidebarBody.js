import { StaticQuery, graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import Markdown from './Markdown';


export default class SidebarBody extends React.PureComponent {
  render() {
    const query = graphql`{
      notation: file(relativePath: {eq: "notation.md"}) {childMarkdownRemark {rawMarkdownBody}}
      links: file(relativePath: {eq: "links.md"}) {childMarkdownRemark {rawMarkdownBody}}
    }`;
    return (
      <StaticQuery
        query={query}
        render={({ notation, links }) => (
          <>
            <Markdown source={notation.childMarkdownRemark.rawMarkdownBody} />
            <Paper children={<Markdown source={links.childMarkdownRemark.rawMarkdownBody} />} elevation={0} />
          </>
        )}
      />
    );
  }
}
