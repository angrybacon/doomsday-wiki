const axios = require('axios').default;


const CARDS = {
  aoi:   ['Act on Impulse',           'M15'],
  bs:    ['Brainstorm',               'ICE'],
  bw:    ['Burning Wish',             'JUD'],
  cb:    ["Conjurer's Bauble",        '5DN'],
  cobru: ['collective brutality',     'EMN'],
  cov:   ['Chain of Vapor',           'ONS'],
  cr:    ['Cabal Ritual',             'TOR'],
  dd:    ['Doomsday',                 'WTH'],
  dr:    ['Dark Ritual',              'LEB'],
  dur:   ['Duress',                   'USG'],
  ef:    ['Experimental Frenzy',      'GRN'],
  em:    ['Emrakul, the Aeons Torn',  'ROE'],
  eot:   ['Edge of Autumn',           'FUT'],
  et:    ['Echoing Truth',            'DST'],
  etw:   ['Empty the Warrens',        'TSP'],
  ic:    ['Infernal Contract',        'MIR'],
  isl:   ['Island',                   'UNH'],
  iu:    ['Ideas Unbound',            'SOK'],
  ldv:   ["Lim-Dul's Vault",          'ALL'],
  led:   ["Lion's Eye Diamond",       'MIR'],
  lm:    ['Laboratory Maniac',        'ISD'],
  lp:    ['Lotus Petal',              'TMP'],
  nc:    ["Nature's Claim",           'WWK'],
  pn:    ['Ponder',                   'LRW'],
  pre:   ['Preordain',                'M11'],
  rof:   ['Rain of Filth',            'USG'],
  si:    ['Shelldock Isle',           'LRW'],
  sw:    ['Street Wraith',            'FUT'],
  toa:   ['Tendrils of Agony',        'SCG'],
  tw:    ['Three Wishes',             'VIS'],
};
const CACHE = {};
const SCRYFALL_API = 'https://api.scryfall.com/cards/named';
const SCRYFALL_RE = /{{\s*(!)?\s*([^|{}]*[^|{}\s])[|\s]*(?:[|\s]+([^|{}]*[^|{}\s]))?\s*}}/g;
const SCRYFALL_SEARCH = 'https://scryfall.com/search';


const markdownify = (name, set = '', art = '') => {
  if (art && set) {
    return `![${name} (${set})](${art.small})`;
  }
  return `[${name}](${SCRYFALL_SEARCH}?q=${encodeURIComponent(name)})`;
};


const scry = (query, one, two, three) => new Promise(resolve => {
  const [ name, defaultSet ] = CARDS[two.toLowerCase()] || [two];
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


module.exports.replace = text => {
  const promises = [];
  text.replace(SCRYFALL_RE, (...rest) => promises.push(scry(...rest)));
  return Promise.all(promises).then(results => text.replace(SCRYFALL_RE, () => results.shift()));
};
