import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Markdown from '../Markdown';
import Puzzle from '../Puzzle';


export default function PagePuzzles() {
  const { introduction, puzzles } = useStaticQuery(graphql`{
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
  }`);
  const { frontmatter, rawMarkdownBody } = introduction.childMarkdownRemark;
  return (
    <>
      <Paper>
        <Typography children={frontmatter.title} gutterBottom variant="h3" />
        <Markdown source={rawMarkdownBody} />
      </Paper>
      {puzzles.nodes.map((it, index) => (
        <Paper key={index}>
          <Puzzle barf data={it}/>
        </Paper>
      ))}
    </>
  );
}
