import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Markdown from '../Markdown';


export default function SidebarBody() {
  const { body } = useStaticQuery(graphql`{
    body: file(relativePath: {eq: "partials/notation.md"}) {
      childMarkdownRemark {rawMarkdownBody}
    }
  }`);
  return <Markdown source={body.childMarkdownRemark.rawMarkdownBody} />;
}
