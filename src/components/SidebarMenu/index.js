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
  }`).chapters.group.sort((a, b) => (menu[a.fieldValue] || {}).order - (menu[b.fieldValue] || {}).order);

  return (
    <List component="nav" disablePadding>
      {chapters.map(({ fieldValue, nodes }, index) => {
        const { icon, subtitle, title } = menu[fieldValue] || {};
        return (
          <React.Fragment key={index}>
            <ListItem button onClick={toggleCollapse(fieldValue)}>
              {!!icon && <ListItemIcon children={icon} />}
              <ListItemText primary={title || `Chapter ${fieldValue}`} secondary={subtitle} />
            </ListItem>
            <Collapse in={collapses[fieldValue]} timeout="auto">
              <Divider />
              <List>
                {nodes.map(({ childMarkdownRemark, fields }, index) => (
                  <ListItem activeClassName={classes.active}
                            button
                            component={Link}
                            dense
                            key={index}
                            to={fields.slug}>
                    <ListItemText primary={childMarkdownRemark.frontmatter.title} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Collapse>
          </React.Fragment>
        );
      })}
      <ListItem button component={Link} to="/puzzles/">
        {!!menu.puzzles.icon && <ListItemIcon children={menu.puzzles.icon} />}
        <ListItemText primary={menu.puzzles.title || 'Puzzles'} secondary={menu.puzzles.subtitle} />
      </ListItem>
    </List>
  );
}
