import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Markdown from '../components/Markdown';
import Paper from '../components/Paper';

export default function PageAuthors() {

  const { authors } = useStaticQuery(graphql`{
    authors: allFile(
      filter: {relativePath: {glob: "authors/**/*"}}
      sort: {fields: name, order: ASC}
    ) {
      nodes {
        childMarkdownRemark {rawMarkdownBody}
      }
    }
  }`);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.mixins.sidebar.treshold);

  return authors.nodes.length > 0 && (
    <>
      <Grid container spacing={isMobile ? 2 : 3}>
        {authors.nodes.map(({ childMarkdownRemark: content }, index) => (
          <Grid key={index} item xs={12}>
            <Paper children={<Markdown source={content.rawMarkdownBody} />} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
