import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Markdown from '../Markdown';
import Paper from '../Paper';

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
  const { title } = frontmatter;
  return (
    <Paper>
      {title && <Typography gutterBottom align="center" variant="h3">{title}</Typography>}
      <Markdown source={rawMarkdownBody} />
    </Paper>
  );
}
