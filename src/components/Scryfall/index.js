import axios from 'axios';
import React from 'react';

import Card from '../Card';
import Prettylink from '../Prettylink';


const SCRYFALL_API = 'https://api.scryfall.com/cards/named';
const SCRYFALL_SEARCH = 'https://scryfall.com/search';
const STATIC_CARD_BACK = '/cards/back.png';


const ACRONYM_MAP = {
  bw: ['Burning Wish', 'JUD'],
  cb: ["Conjurer's Bauble", '5DN'],
  cov: ['Chain of Vapor', 'ONS'],
  cr: ['Cabal Ritual', 'TOR'],
  dr: ['Dark Ritual', 'LEB'],
  dur: ['Duress', 'USG'],
  ic: ['Infernal Contract', 'MIR'],
  led: ["Lion's Eye Diamond", 'MIR'],
  lp: ['Lotus Petal', 'TMP'],
  rof: ['Rain of Filth', 'USG'],
  toa: ['Tendrils of Agony', 'SCG'],
};


class Scryfall extends React.PureComponent {

  state = {art: null, link: null, name: null, showArt: null};

  getCard = (name, set='') => (
    axios.get(`${SCRYFALL_API}?exact=${name}&set=${set}`)
  );

  setCard = card => {
    if (card) {
      this.setState({
        art: (card.image_uris || card.card_faces[0].image_uris).small,
        name: card.name,
      });
    }
    else {
      this.setState({art: STATIC_CARD_BACK});
    }
  };

  componentDidMount() {
    const query = this.props.query && this.props.query.trim();
    if (query) {
      const showArt = query.startsWith('!');
      let [ name, set ] = query.split('|');
      name = name.slice(~~showArt).trim();
      const [ defaultName, defaultSet ] = ACRONYM_MAP[name.toLowerCase()] || [];
      name = defaultName || name;
      set = (set || defaultSet || '').trim();
      if (showArt) {
        this.setState({showArt: showArt});
        this.getCard(name, set).then(
          response => this.setCard(response.data),
          () => this.setCard(),
        );
      }
      else {
        this.setState({link: `${SCRYFALL_SEARCH}?q=${name}`, name: name});
      }
    }
    else {
      this.setCard();
    }
  }

  render() {
    const { art, link, name, showArt } = this.state;
    return showArt ? <Card name={name} url={art} /> : <Prettylink children={name} href={link} />;
  }
}


export default Scryfall;
