import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Prettylink from '../Prettylink';


export default function Articles() {
  const { articles } = useStaticQuery(graphql`{
    articles: allFile(
      filter: {sourceInstanceName: {eq: "articles"}},
      sort: {fields: fields___slug, order: ASC}
    ) {
      nodes {
        childMarkdownRemark {frontmatter {authors title}}
        fields {date slug}
      }
    }
  }`);
  return (
    <>
      <Typography children="Articles" gutterBottom variant="h3" />
      <List disablePadding>
        {articles.nodes.map(({ childMarkdownRemark: content, fields }, index) => {
          const title = content.frontmatter.title;
          const authors = content.frontmatter.authors ? ` by ${content.frontmatter.authors}` : '';
          const primary = <Prettylink children={title} href={fields.slug} />;
          const secondary = `${fields.date}${authors}`;
          return <ListItemText key={index} primary={primary} secondary={secondary} />;
        })}
      </List>
    </>
  );
}
