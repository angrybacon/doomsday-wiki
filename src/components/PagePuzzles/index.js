import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Markdown from '../Markdown';
import Puzzle from '../Puzzle';


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
          frontmatter {title}
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

    return <StaticQuery query={query} render={({ introduction, puzzles }) => {
      const { frontmatter, rawMarkdownBody } = introduction.childMarkdownRemark;
      return (
        <Paper>
          <Typography children={frontmatter.title} gutterBottom variant="h3" />
          <Markdown source={rawMarkdownBody} />
          {puzzles.nodes.map((it, index) => (
            <div className={classes.puzzle} key={index}>
              <Puzzle data={it}/>
            </div>
          ))}
        </Paper>
      );
    }} />;
  }
}


export default withStyles(styles)(PagePuzzles);
