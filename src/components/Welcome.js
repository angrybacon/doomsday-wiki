import { StaticQuery, graphql } from 'gatsby';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Markdown from './Markdown';
import Prettylink from './Prettylink';


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
          <Typography children={frontmatter.title} variant="h3" />
          <Box children={<Divider />} my={3} />
          <Markdown source={rawMarkdownBody} />
        </>
      );
    }} />;
  }
}
