import React from 'react';
import axios from 'axios';
import withStyles from '@material-ui/core/styles/withStyles';

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

class Card extends React.Component {

    state = {card: null, tapped: false};
  
    componentDidMount() {
      const data = this.props.data ? this.props.data.split('|') : null;
      if (data) {
        const card = {name: data[0], set: data.length > 1 ? data[1] : undefined};
        if (card.name[0] === '-') {
          this.setState({tapped: true});
          card.name = card.name.slice(1);
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
  }

  export default withStyles(styles)(Card);