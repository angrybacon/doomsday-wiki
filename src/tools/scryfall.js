const axios = require('axios').default;


const CARDS = {
  AoI:   ['Act on Impulse',           'M15'],
  BS:    ['Brainstorm',               'ICE'],
  BW:    ['Burning Wish',             'JUD'],
  CB:    ["Conjurer's Bauble",        '5DN'],
  CR:    ['Cabal Ritual',             'TOR'],
  CS:    ['Chromatic Sphere',         'INV'],
  CoBru: ['Collective Brutality',     'EMN'],
  CoV:   ['Chain of Vapor',           'ONS'],
  DD:    ['Doomsday',                 'WTH'],
  DR:    ['Dark Ritual',              'LEB'],
  Dur:   ['Duress',                   'USG'],
  EF:    ['Experimental Frenzy',      'GRN'],
  ET:    ['Echoing Truth',            'DST'],
  Echo:  ['Echo of Eons',             'MH1'],
  Em:    ['Emrakul, the Aeons Torn',  'ROE'],
  EoT:   ['Edge of Autumn',           'FUT'],
  EtW:   ['Empty the Warrens',        'TSP'],
  GP:    ['Gitaxian Probe',           'NPH'],
  IC:    ['Infernal Contract',        'MIR'],
  IU:    ['Ideas Unbound',            'SOK'],
  Isl:   ['Island',                   'UNH'],
  LDV:   ["Lim-Dûl's Vault",          'ALL'],
  LED:   ["Lion's Eye Diamond",       'MIR'],
  LM:    ['Laboratory Maniac',        'ISD'],
  LP:    ['Lotus Petal',              'TMP'],
  NC:    ["Nature's Claim",           'WWK'],
  Pd:    ['Predict',                  'ODY'],
  Pn:    ['Ponder',                   'LRW'],
  Pre:   ['Preordain',                'M11'],
  RoF:   ['Rain of Filth',            'USG'],
  SI:    ['Shelldock Isle',           'LRW'],
  SW:    ['Street Wraith',            'FUT'],
  TW:    ['Three Wishes',             'VIS'],
  ToA:   ['Tendrils of Agony',        'SCG'],
  Veil:  ['Veil of Summer',           'M20'],
  WT:    ['Wishclaw Talisman',        'ELD'],
};
const CACHE = {};
const SCRYFALL_API = 'https://api.scryfall.com/cards/named';
const SCRYFALL_RE = /{{\s*(!)?\s*([^|{}]*[^|{}\s])[|\s]*(?:[|\s]+([^|{}]*[^|{}\s]))?\s*}}/g;
const SCRYFALL_SEARCH = 'https://scryfall.com/search';


const markdownify = (name, set = '', art = '') => {
  if (art && set) {
    return `![${name} (${set})](${art.border_crop})`;
  }
  return `[${name}](${SCRYFALL_SEARCH}?q=${encodeURIComponent(name)})`;
};


const scry = (query, one, two, three) => new Promise(resolve => {
  const [ name, defaultSet ] = CARDS[two] || [two];
  const set = three || defaultSet;
  if (one === '!') {
    search(name, set).then(
      ({ data }) => {
        const { card_faces, image_uris, name, set_name } = data;
        const art = image_uris || card_faces[0].image_uris;
        resolve(markdownify(name, set_name, art));
      },
      () => resolve(query),
    );
  }
  else {
    resolve(markdownify(name));
  }
});


const search = (name, set = '') => new Promise((resolve, reject) => {
  const key = `${name}|${set}`;
  if (CACHE[key]) {
    resolve(CACHE[key]);
  }
  else {
    axios.get(`${SCRYFALL_API}?exact=${name}&set=${set}`).then(response => {
      CACHE[key] = response;
      resolve(response);
    }, reject);
  }
});


module.exports.cards = CARDS;


module.exports.replace = text => {
  const promises = [];
  text.replace(SCRYFALL_RE, (...rest) => promises.push(scry(...rest)));
  return Promise.all(promises).then(results => text.replace(SCRYFALL_RE, () => results.shift()));
};
