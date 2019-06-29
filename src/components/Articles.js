import { StaticQuery, graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Prettylink from './Prettylink';


export default class Articles extends React.PureComponent {
  render() {
    const query = graphql`{
      allFile(
        filter: {relativePath: {glob: "articles/**/*"}}
        sort: {fields: fields___slug}
      ) {edges {node {
        childMarkdownRemark {
          frontmatter {authors}
          headings(depth: h1) {value}
        }
        fields {slug}
      }}}
    }`;
    return <StaticQuery query={query} render={({ allFile }) => (
      <>
        <Typography children="Articles" gutterBottom variant="h3" />
        <Typography component="ul">
          {allFile.edges.map((it, index) => {
            const { childMarkdownRemark: content, fields } = it.node;
            return (
              <li key={index}>
                <Prettylink children={content.headings[0].value} href={fields.slug}/>
                {content.frontmatter.authors && ` - by ${content.frontmatter.authors}`}
              </li>
            );
          })}
        </Typography>
      </>
    )} />;
  }
}
