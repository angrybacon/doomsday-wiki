import { StaticQuery, graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import Articles from './Articles';
import Markdown from './Markdown';


export default class Home extends React.PureComponent {
  render() {
    const query = graphql`{
      home: file(relativePath: {eq: "partials/home.md"}) {childMarkdownRemark {rawMarkdownBody}}
      links: file(relativePath: {eq: "partials/links.md"}) {childMarkdownRemark {rawMarkdownBody}}
    }`;
    return <StaticQuery query={query} render={({ articles, home, links }) => (
      <>
        <Paper children={<Markdown source={home.childMarkdownRemark.rawMarkdownBody} />} />
        <Paper children={<Articles />} />
        <Paper children={<Markdown source={links.childMarkdownRemark.rawMarkdownBody} />} />
      </>
    )} />;
  }
}
