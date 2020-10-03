const axios = require('axios').default;

const CARDS = {
  AA:    ["Arcum's Astrolabe",        'MH1'],
  AD:    ['Abrupt Decay',             'RTR'],
  AoI:   ['Act on Impulse',           'M15'],
  BS:    ['Brainstorm',               'ICE'],
  BW:    ['Burning Wish',             'JUD'],
  CB:    ["Conjurer's Bauble",        '5DN'],
  CR:    ['Cabal Ritual',             'TOR'],
  CS:    ['Chromatic Sphere',         'INV'],
  CoB:   ['City of Brass',            'ARN'],
  CoBru: ['Collective Brutality',     'EMN'],
  CoS:   ['Cavern of Souls',          'AVR'],
  CoV:   ['Chain of Vapor',           'ONS'],
  DD:    ['Doomsday',                 'WTH'],
  DR:    ['Dark Ritual',              'LEB'],
  DW:    ['Divining Witch',           'NEM'],
  Dur:   ['Duress',                   'USG'],
  Dz:    ['Daze',                     'NEM'],
  EF:    ['Experimental Frenzy',      'GRN'],
  ET:    ['Echoing Truth',            'DST'],
  Em:    ['Emrakul, the Aeons Torn',  'ROE'],
  EoA:   ['Edge of Autumn',           'FUT'],
  EoE:   ['Echo of Eons',             'MH1'],
  EtW:   ['Empty the Warrens',        'TSP'],
  FoW:   ['Force of Will',            'ALL'],
  GM:    ['Gemstone Mine',            'WTH'],
  GP:    ['Gitaxian Probe',           'NPH'],
  I:     ['Island',                   'UNH'],
  IC:    ['Infernal Contract',        'MIR'],
  IU:    ['Ideas Unbound',            'SOK'],
  LDV:   ["Lim-Dûl's Vault",          'ALL'],
  LED:   ["Lion's Eye Diamond",       'MIR'],
  LM:    ['Laboratory Maniac',        'ISD'],
  LP:    ['Lotus Petal',              'TMP'],
  Mm:    ['Manamorphose',             'SHM'],
  NC:    ["Nature's Claim",           'WWK'],
  Pdt:   ['Predict',                  'ODY'],
  Pnd:   ['Ponder',                   'LRW'],
  Pre:   ['Preordain',                'M11'],
  REB:   ['Red Elemental Blast',      'LEB'],
  Rain:  ['Rain of Filth',            'USG'],
  RiP:   ['Rest in Peace',            'RTR'],
  Rite:  ['Rite of Flame',            'CSP'],
  S:     ['Swamp',                    'UNH'],
  SCI:   ['Snow-Covered Island',      'ICE'],
  SCS:   ['Snow-Covered Swamp',       'ICE'],
  SE:    ['Surgical Extraction',      'NPH'],
  SI:    ['Shelldock Isle',           'LRW'],
  ST:    ['Scalding Tarn',            'ZEN'],
  SW:    ['Street Wraith',            'FUT'],
  SotV:  ['Spoils of the Vault',      'MRD'],
  StP:   ['Swords to Plowshares',     'LEB'],
  TO:    ["Thassa's Oracle",          'THB'],
  TS:    ['Thought Scour',            'DKA'],
  TW:    ['Three Wishes',             'VIS'],
  ToA:   ['Tendrils of Agony',        'SCG'],
  Tsz:   ['Thoughtseize',             'LRW'],
  Un:    ['Unearth',                  'ULG'],
  VoS:   ['Veil of Summer',           'M20'],
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
  return Promise
    .all(promises)
    .then(results => text.replace(SCRYFALL_RE, () => results.shift()));
};
