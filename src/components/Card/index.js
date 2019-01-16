import axios from 'axios';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';


const ENDPOINT_SCRYFALL = 'https://api.scryfall.com/cards/named';
const STATIC_CARD_BACK = '/cards/back.png';
const STATIC_CARD_404 = '/cards/404.png';


const styles = theme => ({

  // board: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   width: '100%',
  //   padding: '2em'
  // },

  // boardRoot: {
  //   boxSizing: 'border-box',
  //   display: 'flex',
  //   height: '50%',
  //   paddingBottom: '2em',
  //   paddingTop: '1em',
  //   position: 'relative',
  // },

  // boardRootOpponent: {
  //   transform: 'rotate(180deg)',
  // },

  // card: {
  //   display: 'block',
  //   height: '4em',
  // },

  // cardTapped: {
  //   transform: 'rotate(85deg)',
  // },

  // cards: {
  //   alignItems: 'center',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   listStyleType: 'none',
  //   margin: 0,
  //   padding: 0,
  // },

  // graveyard: {
  //   flexDirection: 'column',
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   marginTop: '-1em',
  // },

  // hand: {
  //   position: 'absolute',
  //   bottom: '-2em',
  //   left: 0,
  //   right: 0,
  //   padding: '2em'
  // },

  // layout: {
  //   ...theme.mixins.padding({x: true}),
  // },

  // root: theme.mixins.padding({y: true}),
});


class Card extends React.Component {

  state = {art: null, name: null, tapped: false};

  componentDidMount() {
    const query = this.props.query ? this.props.query.split('|') : null;
    if (query) {
      const card = {name: query[0], set: query.length > 1 ? query[1] : undefined};
      if (card.name[0] === '-') {
        this.setState({tapped: true});
        card.name = card.name.slice(1);
      }
      return this.getCard(card).then(() => {
        console.log(this.state.name, this.state.art);
      });
    }
    this.setCard(STATIC_CARD_BACK);
  }

  getCard(card) {
    return axios.get(`${ENDPOINT_SCRYFALL}?exact=${card.name}&set=${card.set || ''}`).then(
      response => {
        const card = response.data;
        return this.setCard(
          card.name,
          (card.image_uris ? card.image_uris : card.card_faces[0].image_uris).small,
        );
      },
      () => this.setCard(null, STATIC_CARD_404),
    );
  }

  setCard(name, art) {
    return this.setState({art: art, name: name});
  }

  render() {
    const { classes, style } = this.props;
    const { art, name, tapped } = this.state;
    return art ? React.createElement('img', {
      alt: name,
      // className: [classes.card, tapped ? classes.cardTapped : ''].join(' '),
      // src: (card.image_uris ? card.image_uris : card.card_faces[0].image_uris).small,
      src: art,
      // style: style,
    }) : null;
  }
}


export default withStyles(styles)(Card);
