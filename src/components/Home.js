import { StaticQuery, graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import Markdown from './Markdown';


export default class Home extends React.PureComponent {
  render() {
    const query = graphql`{
      articles: file(relativePath: {eq: "articles.md"}) {childMarkdownRemark {rawMarkdownBody}}
      home: file(relativePath: {eq: "home.md"}) {childMarkdownRemark {rawMarkdownBody}}
    }`;
    return <StaticQuery query={query} render={({ articles, home }) => (
      <>
        <Paper children={<Markdown source={home.childMarkdownRemark.rawMarkdownBody} />} />
        <Paper children={<Markdown source={articles.childMarkdownRemark.rawMarkdownBody} />} />
      </>
    )} />;
  }
}
