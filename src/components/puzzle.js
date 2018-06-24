import React from 'react';

import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from './markdown';


const puzzleLayoutHeight = 400;
const styles = theme => ({

  board: {
    flexGrow: 1,
  },

  card: {
    display: 'block',
    height: '4em',
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
    bottom: 0,
    left: 0,
    right: 0,
  },

  layout: {
    ...theme.mixins.padding({x: true}),
    height: puzzleLayoutHeight,
  },

  root: theme.mixins.padding({y: true}),

  table: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  tableRoot: {
    boxSizing: 'border-box',
    display: 'flex',
    height: '50%',
    paddingBottom: '3em',
    position: 'relative',
  },

  tableRootOpponent: {
    transform: 'rotate(180deg)',
  },
});


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
    const { classes, component, gutters, tilt } = this.props;
    const { card } = this.state;
    const image = (
      card
        ? (
          <img alt={card.name}
               className={classes.card}
               src={(card.image_uris ? card.image_uris : card.card_faces[0].image_uris).small}
               style={{...{
                 ...(gutters && {margin: '0 .5em'}),
                 ...(tilt && {transform: 'rotate(' + tilt * 2 + 'deg)'})
               }}} />
        )
      : null
    );
    return React.createElement(component || 'li', {}, image);
  }
});


const PuzzleCards = withStyles(styles)(props => {
  const { classes, data, gutters, spread, variant } = props;
  const cards = (data || []).map((card, index) => (
    <PuzzleCard data={card}
                gutters={gutters}
                key={index}
                tilt={spread && index - ((data ? data.length : 0) / 2 | 0)} />
  ));
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
        <PuzzleTable data={data && data.opponent} opponent />
        <PuzzleTable data={data && data.self} />
      </div>
    );
  }
});


const PuzzleTable = withStyles(styles)(props => {
  const { classes, data, opponent } = props;
  const className = [classes.tableRoot, (opponent ? classes.tableRootOpponent : '')].join(' ');
  return (
    <div className={className}>
      <div className={classes.table}>
        <PuzzleCards data={data && data.graveyard} variant="graveyard" />
        <PuzzleCards data={data && data.hand} variant="hand" spread />
        <PuzzleCards data={data && data.permanents} gutters variant="board" />
        <PuzzleCards data={data && data.lands} gutters variant="board" />
      </div>
    </div>
  );
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
