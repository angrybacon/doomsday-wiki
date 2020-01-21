import { StaticQuery, graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import Markdown from '../Markdown';


export default class PageAuthors extends React.PureComponent {
  render() {
    const query = graphql`{
      allFile(
        filter: {relativePath: {glob: "authors/**/*"}}
        sort: {fields: name}
      ) {edges {node {childMarkdownRemark {rawMarkdownBody}}}}
    }`;
    return <StaticQuery query={query} render={({ allFile }) => (
      <>
        {allFile.edges.map((it, index) => (
          <Paper children={<Markdown source={it.node.childMarkdownRemark.rawMarkdownBody} />}
                 key={index} />
        ))}
      </>
    )} />;
  }
}
