import React from 'react';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from './markdown';


const puzzleLayoutHeight = 400;
const styles = theme => ({

  puzzleBoard: {
    display: 'flex',
    flexDirection: 'column-reverse',
    height: '50%',
    position: 'relative',
  },

  puzzleBoardOpponent: {
    flexDirection: 'column',
  },

  puzzleCard: {
    display: 'block',
  },

  puzzleCardImage: {
    display: 'block',
    height: 70,
  },

  puzzleCardOpponent: {
  },

  puzzleGraveyard: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '20%',
  },

  puzzleGraveyardOpponent: {
    left: 'unset',
    right: 0,
  },

  puzzleHand: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    position: 'absolute',
    right: 0,
  },

  puzzleHandOpponent: {
    bottom: 'unset',
    top: 0,
  },

  puzzleLands: {
    alignItems: 'center',
    backgroundColor: 'khaki',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },

  puzzleLandsOpponent: {},

  puzzlePermanents: {
    alignItems: 'center',
    backgroundColor: 'beige',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },

  puzzlePermanentsOpponent: {},

  puzzleLayout: {
    ...theme.mixins.padding({x: true}),
    height: puzzleLayoutHeight,
  },

  root: theme.mixins.padding({y: true}),
});


const PuzzleBoard = withStyles(styles)(props => {
  const { classes, data, opponent } = props;
  const className = classes.puzzleBoard + (opponent ? ' ' + classes.puzzleBoardOpponent : '');
  return (
    <div className={className}>
      <PuzzleGraveyard data={data && data.graveyard} opponent={opponent} />
      <PuzzleHand data={data && data.hand} opponent={opponent} />
      <PuzzleLands data={data && data.lands} opponent={opponent} />
      <PuzzlePermanents data={data && data.permanents} opponent={opponent} />
    </div>
  );
});


const PuzzleCard = withStyles(styles)(props=> {
  const { classes, component, data, opponent } = props;
  const className = classes.puzzleCard + (opponent ? ' ' + classes.puzzleCardOpponent : '');
  return React.createElement(component || 'div', {className: className}, data);
});


const PuzzleGraveyard = withStyles(styles)(props => {
  const { classes, opponent, data } = props;
  const className = classes.puzzleGraveyard + (opponent ? ' ' + classes.puzzleGraveyardOpponent : '');
  return (
    <div className={className}>
      <p>Graveyard</p>
    </div>
  );
});


const PuzzleHand = withStyles(styles)(props => {
  const { classes, opponent, data } = props;
  const className = classes.puzzleHand + (opponent ? ' ' + classes.puzzleHandOpponent : '');
  const cards = (data || []).map(
    (card, index) => <PuzzleCard component="li" data={card} key={index} />
  );
  return <ul className={className}>{cards}</ul>;
});


const PuzzleLands = withStyles(styles)(props => {
  const { classes, opponent, data } = props;
  const className = classes.puzzleLands + (opponent ? ' ' + classes.puzzleLandsOpponent : '');
  return (
    <div className={className}>
      <p>Lands</p>
    </div>
  );
});


const PuzzlePermanents = withStyles(styles)(props => {
  const { classes, opponent, data } = props;
  const className = classes.puzzlePermanents + (opponent ? ' ' + classes.puzzlePermanentsOpponent : '');
  return (
    <div className={className}>
      <p>Permanents</p>
    </div>
  );
});


const PuzzleLayout = withStyles(styles)(class PuzzleLayoutRoot extends React.Component {

  state = {data: null};

  componentDidMount() {
    this.update();
  }

  update() {
    const path = (
      this.props.match
        ? this.props.match.url.split('/').filter(it => it).join('/') + '.json'
        : this.props.source
    );
    import('../pages/' + path).then(
      data => this.setState({data: data}),
      () => this.setState({data: null}),
    );
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className={classes.puzzleLayout}>
        <PuzzleBoard data={data && data.opponent} opponent />
        <PuzzleBoard data={data && data.self} />
      </div>
    );
  }
});


class Puzzle extends React.Component {
  render() {
    const { classes, match } = this.props;
    return (
      <Paper className={classes.root} component="article">
        <PuzzleLayout match={match} />
        <Markdown match={match}/>
      </Paper>
    );
  }
}


export default withStyles(styles)(Puzzle);
