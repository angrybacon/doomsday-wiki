import React from 'react';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from './markdown';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from '../Markdown';

import Card from '../Card';


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
    height: puzzleLayoutHeight,
    overflow: 'hidden',
  },
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

const PuzzleCards = withStyles(styles)(props => {
  const { classes, data, gutters, spread, variant } = props;
  const cards = (data || []).map((card, index, cards) => {
    const last = index === cards.length - 1;
    const tilt = spread ? index - (cards.length / 2 | 0) : 0;
    const offset = Math.abs(tilt) * .05;
    return (
      <Card data={card}
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


const PuzzleLayout = withStyles(styles)(class PuzzleLayoutRoot extends React.PureComponent {

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
    import('../../pages/' + path).then(
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
