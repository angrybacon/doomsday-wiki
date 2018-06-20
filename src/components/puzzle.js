import React from 'react';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from './markdown';


const puzzleLayoutHeight = 400;
const styles = theme => ({
  puzzleBoard: {
    display: 'flex',
    flexDirection: 'column',
    height: '50%',
    outline: '1px solid grey',
    position: 'relative',
  },
  puzzleGraveyard: {},
  puzzleGraveyardOpponent: {},
  puzzleHand: {
    bottom: 0,
    height: '30%',
    left: 0,
    outline: '1px solid grey',
    position: 'absolute',
    right: 0,
  },
  puzzleHandOpponent: {
    bottom: 'unset',
    top: 0,
  },
  puzzleLands: {},
  puzzleLandsOpponent: {},
  puzzlePermanents: {},
  puzzlePermanentsOpponent: {},
  puzzleLayout: {
    ...theme.mixins.padding({x: true}),
    height: puzzleLayoutHeight,
  },
  root: theme.mixins.padding({y: true}),
});


const PuzzleBoard = withStyles(styles)(props => {
  const { classes, opponent } = props;
  return (
    <div className={classes.puzzleBoard}>
      <PuzzleGraveyard opponent={opponent} />
      <PuzzleHand opponent={opponent} />
      <PuzzleLands opponent={opponent} />
      <PuzzlePermanents opponent={opponent} />
    </div>
  );
});


const PuzzleGraveyard = withStyles(styles)(props => {
  const { classes, opponent } = props;
  const className = classes.puzzleGraveyard + (opponent ? ' ' + classes.puzzleGraveyardOpponent : '');
  return (
    <div className={className}>
      <p>Graveyard</p>
    </div>
  );
});


const PuzzleHand = withStyles(styles)(props => {
  const { classes, opponent } = props;
  const className = classes.puzzleHand + (opponent ? ' ' + classes.puzzleHandOpponent : '');
  return (
    <div className={className}>
      <p>Hand</p>
    </div>
  );
});


const PuzzleLands = withStyles(styles)(props => {
  const { classes, opponent } = props;
  const className = classes.puzzleLands + (opponent ? ' ' + classes.puzzleLandsOpponent : '');
  return (
    <div className={className}>
      <p>Lands</p>
    </div>
  );
});


const PuzzlePermanents = withStyles(styles)(props => {
  const { classes, opponent } = props;
  const className = classes.puzzlePermanents + (opponent ? ' ' + classes.puzzlePermanentsOpponent : '');
  return (
    <div className={className}>
      <p>Permanents</p>
    </div>
  );
});


const PuzzleLayout = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.puzzleLayout}>
      <PuzzleBoard opponent />
      <PuzzleBoard />
    </div>
  );
});


class Puzzle extends React.Component {
  render() {
    const { classes, match } = this.props;
    return (
      <Paper className={classes.root} component="article">
        <PuzzleLayout />
        <Markdown match={match}/>
      </Paper>
    );
  }
}


export default withStyles(styles)(Puzzle);
