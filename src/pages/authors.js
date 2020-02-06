import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Paper from '@material-ui/core/Paper';
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
