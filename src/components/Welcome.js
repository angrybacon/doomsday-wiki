import { StaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Markdown from './Markdown';


export default class Welcome extends React.PureComponent {
  render() {
    const query = graphql`{
      welcome: file(relativePath: {eq: "partials/welcome.md"}) {
        childMarkdownRemark {
          frontmatter {title}
          rawMarkdownBody
        }
      }
    }`;
    return <StaticQuery query={query} render={({ welcome }) => {
      const { frontmatter, rawMarkdownBody } = welcome.childMarkdownRemark;
      return (
        <>
          <Typography children={frontmatter.title} gutterBottom variant="h3" />
          <Markdown source={rawMarkdownBody} />
        </>
      );
    }} />;
  }
}
