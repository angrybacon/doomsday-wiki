import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Markdown from './Markdown.js';
import Puzzle from './Puzzle.js';

import '../reset.scss';


const styles = theme => ({
  body: {
    flexGrow: 1,
    overflowY: 'auto',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
    },
  },
  children: {
    flexGrow: 1,
  },
  content: {
    height: '100%',
  },
  footer: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
  },
  main: {
    height: '100%',
    paddingLeft: theme.mixins.sidebar.width,
    width: '100%',
    [theme.breakpoints.down(theme.mixins.sidebar.treshold)]: {
      paddingLeft: 0,
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    minWidth: 320,
  },
});


class PagePuzzles extends React.PureComponent {
  render() {

    const { classes } = this.props;

    const query = graphql`{
      introduction: file(relativePath: {eq: "partials/puzzles.md"}) {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      puzzles: allPuzzlesYaml(sort: {order: ASC, fields: title}) {
        nodes {
          deckFile
          oppBoard
          oppHand
          situationNotes
          solution
          solutionNotes
          title
          yourBoard
          yourHand
        }
      }
    }`;

    return <StaticQuery query={query} render={({ introduction, puzzles }) => (
      <Paper>
        <Markdown source={introduction.childMarkdownRemark.rawMarkdownBody} />
        {puzzles.nodes.map((it, index) => (
          <div key={index}>
            <Divider />
            <Puzzle data={it}/>
          </div>
        ))}
      </Paper>
    )} />;
  }
}


export default withStyles(styles)(PagePuzzles);
