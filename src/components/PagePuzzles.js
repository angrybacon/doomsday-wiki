import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Markdown from './Markdown.js';
import Puzzle from './Puzzle.js';


const styles = theme => ({
  puzzle: {
    marginTop: theme.spacing(3),
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
          <div className={classes.puzzle} key={index}>
            <Puzzle data={it}/>
          </div>
        ))}
      </Paper>
    )} />;
  }
}


export default withStyles(styles)(PagePuzzles);
