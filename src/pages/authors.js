import { graphql, useStaticQuery } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import Markdown from '../components/Markdown';


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
  return (
    <>
      {authors.nodes.map(({ childMarkdownRemark: content }, index) => (
        <Paper children={<Markdown source={content.rawMarkdownBody} />} key={index} />
      ))}
    </>
  );
}
