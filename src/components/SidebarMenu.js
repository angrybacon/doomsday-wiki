import { Link, StaticQuery, graphql } from 'gatsby';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import AlertOctagonIcon from 'mdi-react/AlertOctagonIcon';
import BabyIcon from 'mdi-react/BabyIcon';
import FileOutlineIcon from 'mdi-react/FileOutlineIcon';
import TargetIcon from 'mdi-react/TargetIcon';
import PuzzleIcon from 'mdi-react/PuzzleIcon';
import React from 'react';


const MENU = {
  1: {icon: <BabyIcon />, subheader: 'The Fundamentals'},
  2: {icon: <TargetIcon />, subheader: 'Supplementary Techniques'},
  3: {icon: <AlertOctagonIcon />, subheader: 'Limitations'},
  appendices: {icon: <FileOutlineIcon />, subheader: 'Appendices'},
  puzzles: {icon: <PuzzleIcon />, subheader: 'Test your Knowledge'}
};


const styles = theme => ({
  active: {
    backgroundColor: theme.palette.action.selected,
  },
});


class SidebarMenu extends React.PureComponent {

  state = {collapses: {}};

  toggleCollapse = key => () => (
    this.setState(state => ({collapses: {...state.collapses, [key]: !state.collapses[key]}}))
  );

  render() {

    const query = graphql`{
      appendices: allFile(
        filter: {relativePath: {glob: "appendices/**/*"}},
        sort: {fields: fields___slug}
      ) {
        edges {
          node {
            childMarkdownRemark {headings(depth: h1) {value}}
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
              childMarkdownRemark {headings(depth: h1) {value}}
              fields {slug}
            }
          }
          fieldValue
        }
      }
    }`;

    const { classes } = this.props;
    const { collapses } = this.state;
    return <StaticQuery query={query} render={({ appendices, chapters }) => (
      <List component="nav">

        {chapters.group.map(({ edges, fieldValue }, index) => (
          <React.Fragment key={index}>
            <ListItem button onClick={this.toggleCollapse(fieldValue)}>
              <ListItemIcon children={MENU[fieldValue].icon} />
              <ListItemText primary={`Chapter ${fieldValue}`} secondary={MENU[fieldValue].subheader}/>
            </ListItem>
            <Collapse in={collapses[fieldValue]} timeout="auto">
              <Divider />
              <List component="ul">
                {edges.map(({ node }, index) => (
                  <ListItem activeClassName={classes.active}
                            button
                            component={Link}
                            dense
                            key={index}
                            to={node.fields.slug}>
                    <ListItemText primary={node.childMarkdownRemark.headings[0].value} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Collapse>
          </React.Fragment>
        ))}

        <>
          <ListItem button onClick={this.toggleCollapse('appendices')}>
            <ListItemIcon children={MENU.appendices.icon} />
            <ListItemText primary="Postamble" secondary={MENU.appendices.subheader} />
          </ListItem>
          <Collapse in={collapses.appendices} timeout="auto">
            <Divider />
            <List component="ul">
              {appendices.edges.map(({ node }, index) => (
                <ListItem activeClassName={classes.active}
                          button
                          component={Link}
                          dense
                          key={index}
                          to={node.fields.slug}>
                  <ListItemText primary={node.childMarkdownRemark.headings[0].value} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </Collapse>
          <ListItem button component={Link} to="/puzzles/">
            <ListItemIcon children={MENU.puzzles.icon} />
            <ListItemText primary="Puzzles" secondary="Challenge Yourself" />
          </ListItem>
        </>
      </List>
    )} />;
  }
}


export default withStyles(styles)(SidebarMenu);
