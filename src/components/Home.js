import { StaticQuery, graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';



export default class Home extends React.PureComponent {
  render() {
    const query = graphql`{
      home: file(relativePath: {eq: "home.md"}) {childMarkdownRemark {rawMarkdownBody}}
      test: file(relativePath: {eq: "test.md"}) {childMarkdownRemark {rawMarkdownBody}}
    }`;
    return <StaticQuery query={query} render={({ home, test }) => (
      <>
        <Paper children={<Typography children={home.childMarkdownRemark.rawMarkdownBody} />} />
        <Paper children={<Typography children={test.childMarkdownRemark.rawMarkdownBody} />} />
      </>
    )} />;
  }
}
