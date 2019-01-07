import React from 'react';

import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from './markdown';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';


const ENDPOINT_SCRYFALL = 'https://api.scryfall.com/cards/named';
const STATIC_CARD_BACK = '/cards/back.png';
const STATIC_CARD_404 = '/cards/404.png';

const styles = theme => ({

  board: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: '2em'
  },

  boardRoot: {
    boxSizing: 'border-box',
    display: 'flex',
    height: '50%',
    paddingBottom: '2em',
    paddingTop: '1em',
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginTop: '-1em',
  },

  hand: {
    position: 'absolute',
    bottom: '-2em',
    left: 0,
    right: 0,
    padding: '2em'
  },

  layout: {
    ...theme.mixins.padding({x: true}),
  },

  root: theme.mixins.padding({y: true}),
});


const PuzzleBoard = withStyles(styles)(props => {
  const { classes, data, opponent } = props;
  const className = [classes.boardRoot, (opponent ? classes.boardRootOpponent : '')].join(' ');
  const lifeStyle = opponent ? {transform: 'rotate(180deg)'} : {};
  return (
    <div className={className}>
      <div className={classes.board}>
        <PuzzleCards data={data && data.graveyard} variant="graveyard" />
        <PuzzleCards data={data && data.hand} variant="hand" spread />
        <PuzzleCards data={data && data.permanents} gutters />
        <PuzzleCards data={data && data.lands} gutters />
      </div>
      <Typography variant="h3" style={lifeStyle}>Life: {data && data.life}</Typography>
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
      return this.getCard(card);
    }
    this.setCard(STATIC_CARD_BACK);
  }

  getCard(card) {
    const parameters = 'exact=' + card.name + (card.set ? '&set=' + card.set : '');
    return axios.get(ENDPOINT_SCRYFALL + '?' + parameters).then(
      response => this.setState({card: response.data}),
      () => this.setCard(STATIC_CARD_404),
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
                    ...(gutters && {margin: '0.5em'}),
                    ...(spread && {marginRight: '-1em', zIndex: index}),
                    ...(variant && variant === "graveyard" && {marginTop: '-3em', zIndex: index}),
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
        {data && data.situation && data.situation.map((str,idx) => {
          const style = idx === 0 ? {marginTop: '1em'} : {};
          return <Typography style={style}>{str}</Typography>;
        })}
      </div>
    );
  }
});


class Puzzle extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  render() {
    const { classes, match } = this.props;
    return (
      <Paper className={classes.root} component="article">
        <PuzzleLayout match={match} />
        <Button variant="contained" onClick={this.handleClick} style={{margin:'2em'}}>
          Show/Hide Solution
        </Button>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <Markdown match={match}/>
        </Collapse>    
      </Paper>
    );
  }
}


export default withStyles(styles)(Puzzle);
