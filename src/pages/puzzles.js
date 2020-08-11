import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Markdown from '../components/Markdown';
import Paper from '../components/Paper';
import Puzzle from '../components/Puzzle';
import PuzzleFilters from '../components/PuzzleFilters';

export default function PagePuzzles() {

  const [ items, setItems ] = useState([]);
  const [ words, setWords ] = useState([]);
  const { introduction, puzzles } = useStaticQuery(graphql`{
    introduction: file(relativePath: {eq: "partials/puzzles.md"}) {
      childMarkdownRemark {
        frontmatter {title}
        rawMarkdownBody
      }
    }
    puzzles: allPuzzlesYaml(sort: {order: ASC, fields: title}) {
      nodes {
        authors
        deckFile
        notes
        oppBoard
        oppHand
        solution
        solutionNotes
        title
        yourBoard
        yourHand
      }
    }
  }`);
  const { frontmatter, rawMarkdownBody } = introduction.childMarkdownRemark;

  const onFilter = newItems => {
    setItems(newItems);
    return newWords => setWords(newWords);
  };

  useEffect(() => {
    if (puzzles.nodes.length) {
      setItems(puzzles.nodes);
    }
  }, [puzzles.nodes]);

  return (
    <>
      <Paper>
        <Typography children={frontmatter.title} gutterBottom variant="h4" />
        <Markdown source={rawMarkdownBody} />
        <Box children={<PuzzleFilters onFilter={onFilter} puzzles={puzzles.nodes} />} mt={2} />
      </Paper>
      {items.map((it, index) => (
        <Puzzle key={index} barf component={Paper} data={it} words={words} />
      ))}
    </>
  );
}
