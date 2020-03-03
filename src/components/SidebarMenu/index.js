import { Link, graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import menu from './menu';
import useStyles from './styles';


export default function SidebarMenu() {

  const [ collapses, setCollapses ] = useState({});
  const classes = useStyles();

  const toggleCollapse = key => () => setCollapses(previous => ({...previous, [key]: !previous[key]}));

  const { appendices, chapters } = useStaticQuery(graphql`{
    appendices: allFile(
      filter: {relativePath: {glob: "appendices/**/*"}},
      sort: {fields: fields___slug}
    ) {
      edges {
        node {
          childMarkdownRemark {frontmatter {title}}
          fields {slug}
        }
      }
    }
    chapters: allFile(
      filter: {relativePath: {glob: "chapters/**/*"}},
      sort: {fields: fields___slug}
    ) {
      group(field: fields___chapter) {
        edges {
          node {
            childMarkdownRemark {frontmatter {title}}
            fields {slug}
          }
        }
        fieldValue
      }
    }
  }`);

  return (
    <List component="nav" disablePadding>

      {chapters.group.map(({ edges, fieldValue }, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={toggleCollapse(fieldValue)}>
            <ListItemIcon children={menu[fieldValue].icon} />
            <ListItemText primary={`Chapter ${fieldValue}`} secondary={menu[fieldValue].subheader}/>
          </ListItem>
          <Collapse in={collapses[fieldValue]} timeout="auto">
            <Divider />
            <List>
              {edges.map(({ node }, index) => (
                <ListItem activeClassName={classes.active}
                          button
                          component={Link}
                          dense
                          key={index}
                          to={node.fields.slug}>
                  <ListItemText primary={node.childMarkdownRemark.frontmatter.title} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </Collapse>
        </React.Fragment>
      ))}

      <ListItem button onClick={toggleCollapse('appendices')}>
        <ListItemIcon children={menu.appendices.icon} />
        <ListItemText primary="Postamble" secondary={menu.appendices.subheader} />
      </ListItem>
      <Collapse in={collapses.appendices} timeout="auto">
        <Divider />
        <List>
          {appendices.edges.map(({ node }, index) => (
            <ListItem activeClassName={classes.active}
                      button
                      component={Link}
                      dense
                      key={index}
                      to={node.fields.slug}>
              <ListItemText primary={node.childMarkdownRemark.frontmatter.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Collapse>

      <ListItem button component={Link} to="/puzzles/">
        {!!menu.puzzles.icon && <ListItemIcon children={menu.puzzles.icon} />}
        <ListItemText primary={menu.puzzles.title || 'Puzzles'} secondary={menu.puzzles.subtitle} />
      </ListItem>
    </List>
  );
}
