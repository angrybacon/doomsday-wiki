import axios from 'axios';
import React from 'react';

import Card from '../Card';
import Prettylink from '../Prettylink';


const ACRONYM_MAP = {
  aoi:  ['Act on Impulse',           'M15'],
  bw:   ['Burning Wish',             'JUD'],
  cb:   ["Conjurer's Bauble",        '5DN'],
  cov:  ['Chain of Vapor',           'ONS'],
  cr:   ['Cabal Ritual',             'TOR'],
  dd:   ['Doomsday',                 'WTH'],
  dr:   ['Dark Ritual',              'LEB'],
  dur:  ['Duress',                   'USG'],
  em:   ['Emrakul, the Aeons Torn',  'ROE'],
  ic:   ['Infernal Contract',        'MIR'],
  isl:  ['Island',                   'UNH'],
  iu:   ['Ideas Unbound',            'SOK'],
  led:  ["Lion's Eye Diamond",       'MIR'],
  lm:   ['Laboratory Maniac',        'ISD'],
  lp:   ['Lotus Petal',              'TMP'],
  pn:   ['Ponder',                   'LRW'],
  pre:  ['Preordain',                'M11'],
  rof:  ['Rain of Filth',            'USG'],
  si:   ['Shelldock Isle',           'LRW'],
  sw:   ['Street Wraith',            'FUT'],
  toa:  ['Tendrils of Agony',        'SCG'],
};
const CACHE = {};
const SCRYFALL_API = 'https://api.scryfall.com/cards/named';
const SCRYFALL_SEARCH = 'https://scryfall.com/search';


class Scryfall extends React.PureComponent {

  state = {art: '/cards/back.png', link: null, name: null, showArt: null};

  getCard = (name, set='') => (
    new Promise((resolve, reject) => {
      if (CACHE[`${name}${set}`]) {
        resolve(CACHE[`${name}${set}`]);
      }
      else {
        axios.get(`${SCRYFALL_API}?exact=${name}&set=${set}`).then(response => {
          CACHE[`${name}${set}`] = response;
          reject(response);
        })
      }
    }).then(response => response, response => response)
  );

  setCard = card => {
    if (card) {
      this.setState({
        art: (card.image_uris || card.card_faces[0].image_uris).small,
        name: card.name,
      });
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
        this.getCard(name, set).then(response => this.setCard(response.data));
      }
      else {
        this.setState({link: `${SCRYFALL_SEARCH}?q=${name}`, name: name});
      }
    }
  }

  render() {
    const { art, link, name, showArt } = this.state;
    return showArt ? <Card name={name} url={art} /> : <Prettylink children={name} href={link} />;
  }
}


export default Scryfall;
