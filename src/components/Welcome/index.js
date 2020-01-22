import { graphql, useStaticQuery } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Markdown from '../Markdown';


export default function Welcome() {
  const { welcome } = useStaticQuery(graphql`{
    welcome: file(relativePath: {eq: "partials/welcome.md"}) {
      childMarkdownRemark {
        frontmatter {title}
        rawMarkdownBody
      }
    }
  }`);
  const { frontmatter, rawMarkdownBody } = welcome.childMarkdownRemark;
  return (
    <>
      <Typography children={frontmatter.title} gutterBottom variant="h3" />
      <Markdown source={rawMarkdownBody} />
    </>
  );
}
