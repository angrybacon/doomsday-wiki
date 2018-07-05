import React from 'react';

import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from './markdown';


const puzzleLayoutHeight = 360;
const styles = theme => ({

  board: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },

  boardRoot: {
    boxSizing: 'border-box',
    display: 'flex',
    height: '50%',
    paddingBottom: '2em',
    paddingTop: '.5em',
    position: 'relative',
  },

  boardRootOpponent: {
    transform: 'rotate(180deg)',
  },

  card: {
    display: 'block',
    height: '4em',
  },

  cardTapped: {
    transform: 'rotate(85deg)',
  },

  cards: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },

  graveyard: {
    flexDirection: 'column',
    justifyContent: 'start',
    position: 'absolute',
    bottom: 0,
    left: 0,
    top: 0,
  },

  hand: {
    position: 'absolute',
    bottom: '-1em',
    left: 0,
    right: 0,
  },

  layout: {
    ...theme.mixins.padding({x: true}),
    height: puzzleLayoutHeight,
    overflow: 'hidden',
  },

  root: theme.mixins.padding({y: true}),
});


const PuzzleBoard = withStyles(styles)(props => {
  const { classes, data, opponent } = props;
  const className = [classes.boardRoot, (opponent ? classes.boardRootOpponent : '')].join(' ');
  return (
    <div className={className}>
      <div className={classes.board}>
        <PuzzleCards data={data && data.graveyard} variant="graveyard" />
        <PuzzleCards data={data && data.hand} variant="hand" spread />
        <PuzzleCards data={data && data.permanents} gutters />
        <PuzzleCards data={data && data.lands} gutters />
      </div>
    </div>
  );
});


const PuzzleCard = withStyles(styles)(class PuzzleCardRoot extends React.Component {

  state = {card: null, tapped: false};

  componentDidMount() {
    const data = this.props.data ? this.props.data.split('|') : null;
    if (data) {
      const card = {name: data[0], set: data.length > 1 ? data[1] : undefined};
      if (card.name[0] === '-') {
        this.setState({tapped: true});
        card.name = card.name.slice(1)
      }
      this.getCard(card);
    }
  }

  getCard(card) {
    const parameters = 'exact=' + card.name + (card.set ? '&set=' + card.set : '');
    return axios.get('https://api.scryfall.com/cards/named?' + parameters).then(
      response => this.setState({card: response.data}),
      () => this.setCard('/cards/404.png'),
    );
  }

  setCard(path) {
    return this.setState({card: {image_uris: {small: path}}})
  }

  render() {
    const { classes, component, style } = this.props;
    const { card, tapped } = this.state;
    const image = (
      card
        ? (
          <img alt={card.name}
               className={[classes.card, tapped ? classes.cardTapped : ''].join(' ')}
               src={(card.image_uris ? card.image_uris : card.card_faces[0].image_uris).small} />
        )
      : null
    );
    return React.createElement(component || 'li', {style: style}, image);
  }
});


const PuzzleCards = withStyles(styles)(props => {
  const { classes, data, gutters, spread, variant } = props;
  const cards = (data || []).map((card, index, cards) => {
    const last = index === cards.length - 1;
    const tilt = spread ? index - (cards.length / 2 | 0) : 0;
    const offset = Math.abs(tilt) * .05;
    return (
      <PuzzleCard data={card}
                  key={index}
                  style={{...{
                    ...(gutters && {margin: '0 .5em'}),
                    ...(spread && {marginRight: '-1em', zIndex: index}),
                    ...(spread && last && {marginRight: 0}),
                    ...((offset || tilt) && {
                      transform: 'translate(0, ' + offset + 'em) rotate(' + tilt * 2 + 'deg)'
                    }),
                  }}} />
    );
  });
  return <ul className={classes.cards + ' ' + classes[variant]}>{cards}</ul>;
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
      <div className={classes.layout}>
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
