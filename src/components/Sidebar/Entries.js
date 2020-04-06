import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import List from '@material-ui/core/List';
import Entry from './Entry';
import menu from './menu';


export default function Entries() {
  const chapters = useStaticQuery(graphql`{
    chapters: allFile(
      filter: {sourceInstanceName: {glob: "(appendices|chapters)"}},
      sort: {fields: childMarkdownRemark___frontmatter___order, order: ASC}
    ) {
      group(field: fields___chapter) {
        nodes {
          childMarkdownRemark {frontmatter {title}}
          fields {slug}
        }
        fieldValue
      }
    }
  }`).chapters.group.sort(({ fieldValue: left }, { fieldValue: right }) => (
    menu[left].order - menu[right].order
  ));
  return (
    <List component="nav" disablePadding>
      {chapters.map(({ fieldValue, nodes }, index) => {
        const { icon, subtitle, title } = menu[fieldValue] || {};
        return <Entry entries={nodes} icon={icon} key={index} subtitle={subtitle} title={title} />;
      })}
      <Entry icon={menu.puzzles.icon}
             subtitle={menu.puzzles.subtitle}
             title={menu.puzzles.title}
             extra={{component: Link, to: '/puzzles/'}} />
    </List>
  );
}
