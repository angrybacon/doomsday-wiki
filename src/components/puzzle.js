import React from 'react';

import axios from 'axios';

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

  puzzleCards: {
    bottom: 0,
    display: 'flex',
    left: 0,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  puzzleCardsOpponent: {
    bottom: 'unset',
    top: 0,
  },

  puzzleGraveyard: {
    flexDirection: 'column',
    width: '20%',
  },

  puzzleGraveyardOpponent: {
    flexDirection: 'column-reverse',
  },

  puzzleHand: {
  },

  puzzleHandOpponent: {
  },

  puzzleLands: {
    backgroundColor: 'khaki',
    flexGrow: 1,
  },

  puzzleLandsOpponent: {},

  puzzlePermanents: {
    backgroundColor: 'beige',
    flexGrow: 1,
  },

  puzzlePermanentsOpponent: {
  },

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
      <PuzzleCards data={data && data.graveyard} opponent={opponent} variant="graveyard" />
      <PuzzleCards data={data && data.hand} opponent={opponent} variant="hand" />
      <PuzzleCards data={data && data.lands} opponent={opponent} variant="lands" />
      <PuzzleCards data={data && data.permanents} opponent={opponent} variant="permanents" />
    </div>
  );
});


const BACK_URI = 'back.jpg';
const PuzzleCard = withStyles(styles)(class PuzzleCardRoot extends React.Component {

  state = {card: null};

  componentDidMount() {
    const data = (this.props.data || 'Stasis|LEA').split('|');
    const parameters = '?exact=' + data[0] + (data.length > 1 ? '&set=' + data[1] : '');
    axios.get('https://api.scryfall.com/cards/named' + parameters).then(
      response => this.setState({card: response.data})
    );
  }

  render() {
    const { classes, component, data, opponent } = this.props;
    const { card } = this.state;
    const className = classes.puzzleCard + (opponent ? ' ' + classes.puzzleCardOpponent : '');
    const image = (
      card
        ? <img alt={card.name} className={classes.puzzleCardImage} src={card.image_uris.small} />
        : null
    );
    return React.createElement(component || 'li', {className: className}, image);
  }
});


const PuzzleCards = withStyles(styles)(props => {
  const { classes, opponent, data, variant } = props;
  const className = (
    classes.puzzleCards
      + (opponent ? ' ' + classes.puzzleCardsOpponent : '')
      + ' ' + {
        graveyard: classes.puzzleGraveyard,
        hand: classes.puzzleHand,
        lands: classes.puzzleLands,
        permanents: classes.puzzlePermanents,
      }[variant]
  );
  const cards = (data || []).map((card, index) => <PuzzleCard data={card} key={index} />);
  return <ul className={className}>{cards}</ul>;
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
      error => console.error(error),
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
