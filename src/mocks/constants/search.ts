import type { ScryDataItem, ScryDataList } from '@/tools/scryfall/types';

export const SEARCH = {
  /* eslint-disable camelcase */
  data: [
    {
      artist: 'Adrian Smith',
      artist_ids: ['be42f6f3-66d4-4957-9f1e-0591f8b95364'],
      booster: true,
      border_color: 'black',
      card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
      cardmarket_id: 8576,
      cmc: 3.0,
      collector_number: '66',
      color_identity: ['B'],
      colors: ['B'],
      digital: false,
      edhrec_rank: 3797,
      finishes: ['nonfoil'],
      foil: false,
      frame: '1997',
      full_art: false,
      games: ['paper', 'mtgo'],
      highres_image: true,
      id: '5b3c6d87-9383-450b-bba5-33435b6b0d08',
      illustration_id: '2c7d4a58-b8dd-447f-820d-bb728a1d11af',
      image_status: 'highres_scan',
      image_uris: {
        art_crop: '/mocks/doomsday.wth.art-crop.jpg',
        border_crop: '/mocks/doomsday.wth.border-crop.jpg',
        large: '/mocks/doomsday.wth.large.jpg',
        normal: '/mocks/doomsday.wth.normal.jpg',
        png: '/mocks/doomsday.wth.png.png',
        small: '/mocks/doomsday.wth.small.jpg',
      },
      keywords: [],
      lang: 'en',
      layout: 'normal',
      legalities: {
        alchemy: 'not_legal',
        brawl: 'not_legal',
        commander: 'legal',
        duel: 'legal',
        explorer: 'not_legal',
        future: 'not_legal',
        gladiator: 'not_legal',
        historic: 'not_legal',
        historicbrawl: 'not_legal',
        legacy: 'legal',
        modern: 'not_legal',
        oldschool: 'not_legal',
        pauper: 'not_legal',
        paupercommander: 'not_legal',
        penny: 'not_legal',
        pioneer: 'not_legal',
        premodern: 'legal',
        standard: 'not_legal',
        vintage: 'legal',
      },
      mana_cost: '{B}{B}{B}',
      mtgo_foil_id: 9280,
      mtgo_id: 9279,
      multiverse_ids: [4454],
      name: 'Doomsday',
      nonfoil: true,
      object: 'card',
      oracle_id: '721eb5a2-d7cf-4db0-8013-ef3f596c52a5',
      oracle_text:
        'Search your library and graveyard for five cards and exile the rest. Put the chosen cards on top of your library in any order. You lose half your life, rounded up.',
      oversized: false,
      prices: {
        eur: '6.00',
        eur_foil: null,
        tix: '24.44',
        usd: '13.21',
        usd_etched: null,
        usd_foil: null,
      },
      prints_search_uri:
        'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A721eb5a2-d7cf-4db0-8013-ef3f596c52a5&unique=prints',
      promo: false,
      purchase_uris: {
        cardhoarder:
          'https://www.cardhoarder.com/cards/9279?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall',
        cardmarket:
          'https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Doomsday&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall',
        tcgplayer:
          'https://www.tcgplayer.com/product/6014?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
      },
      rarity: 'rare',
      related_uris: {
        edhrec: 'https://edhrec.com/route/?cc=Doomsday',
        gatherer:
          'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=4454',
        tcgplayer_infinite_articles:
          'https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Doomsday&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
        tcgplayer_infinite_decks:
          'https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Doomsday&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
      },
      released_at: '1997-06-09',
      reprint: false,
      reserved: false,
      rulings_uri:
        'https://api.scryfall.com/cards/5b3c6d87-9383-450b-bba5-33435b6b0d08/rulings',
      scryfall_set_uri: 'https://scryfall.com/sets/wth?utm_source=api',
      scryfall_uri: 'https://scryfall.com/card/wth/66/doomsday?utm_source=api',
      set: 'wth',
      set_id: '700997ac-add2-4ce2-992e-5efa0fdfc0e9',
      set_name: 'Weatherlight',
      set_search_uri:
        'https://api.scryfall.com/cards/search?order=set&q=e%3Awth&unique=prints',
      set_type: 'expansion',
      set_uri:
        'https://api.scryfall.com/sets/700997ac-add2-4ce2-992e-5efa0fdfc0e9',
      story_spotlight: false,
      tcgplayer_id: 6014,
      textless: false,
      type_line: 'Sorcery',
      uri: 'https://api.scryfall.com/cards/5b3c6d87-9383-450b-bba5-33435b6b0d08',
      variation: false,
    } as ScryDataItem,
    {
      artist: 'Noah Bradley',
      artist_ids: ['81995d11-da98-4f8b-89bd-b88ca2ddb06b'],
      booster: true,
      border_color: 'black',
      card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
      cardmarket_id: 319008,
      cmc: 3.0,
      collector_number: '88',
      color_identity: ['B'],
      colors: ['B'],
      digital: false,
      edhrec_rank: 3797,
      finishes: ['nonfoil', 'foil'],
      foil: true,
      frame: '2015',
      full_art: false,
      games: ['paper', 'mtgo'],
      highres_image: true,
      id: '68c73755-9678-467a-abd5-f8dd1556864e',
      illustration_id: 'f7f9a52f-2ff7-48fd-802f-0a481b0c69fb',
      image_status: 'highres_scan',
      image_uris: {
        art_crop: '/mocks/doomsday.a25.art-crop.jpg',
        border_crop: '/mocks/doomsday.a25.border-crop.jpg',
        large: '/mocks/doomsday.a25.large.jpg',
        normal: '/mocks/doomsday.a25.normal.jpg',
        png: '/mocks/doomsday.a25.png.png',
        small: '/mocks/doomsday.a25.small.jpg',
      },
      keywords: [],
      lang: 'en',
      layout: 'normal',
      legalities: {
        alchemy: 'not_legal',
        brawl: 'not_legal',
        commander: 'legal',
        duel: 'legal',
        explorer: 'not_legal',
        future: 'not_legal',
        gladiator: 'not_legal',
        historic: 'not_legal',
        historicbrawl: 'not_legal',
        legacy: 'legal',
        modern: 'not_legal',
        oldschool: 'not_legal',
        pauper: 'not_legal',
        paupercommander: 'not_legal',
        penny: 'not_legal',
        pioneer: 'not_legal',
        premodern: 'legal',
        standard: 'not_legal',
        vintage: 'legal',
      },
      mana_cost: '{B}{B}{B}',
      mtgo_foil_id: 67091,
      mtgo_id: 67090,
      multiverse_ids: [442077],
      name: 'Doomsday',
      nonfoil: true,
      object: 'card',
      oracle_id: '721eb5a2-d7cf-4db0-8013-ef3f596c52a5',
      oracle_text:
        'Search your library and graveyard for five cards and exile the rest. Put the chosen cards on top of your library in any order. You lose half your life, rounded up.',
      oversized: false,
      prices: {
        eur: '14.98',
        eur_foil: '29.95',
        tix: '9.30',
        usd: '13.00',
        usd_etched: null,
        usd_foil: '43.04',
      },
      prints_search_uri:
        'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A721eb5a2-d7cf-4db0-8013-ef3f596c52a5&unique=prints',
      promo: false,
      purchase_uris: {
        cardhoarder:
          'https://www.cardhoarder.com/cards/67090?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall',
        cardmarket:
          'https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Doomsday&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall',
        tcgplayer:
          'https://www.tcgplayer.com/product/161443?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
      },
      rarity: 'mythic',
      related_uris: {
        edhrec: 'https://edhrec.com/route/?cc=Doomsday',
        gatherer:
          'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=442077',
        tcgplayer_infinite_articles:
          'https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Doomsday&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
        tcgplayer_infinite_decks:
          'https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Doomsday&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
      },
      released_at: '2018-03-16',
      reprint: true,
      reserved: false,
      rulings_uri:
        'https://api.scryfall.com/cards/68c73755-9678-467a-abd5-f8dd1556864e/rulings',
      scryfall_set_uri: 'https://scryfall.com/sets/a25?utm_source=api',
      scryfall_uri: 'https://scryfall.com/card/a25/88/doomsday?utm_source=api',
      security_stamp: 'oval',
      set: 'a25',
      set_id: '41ee6e2f-69b3-4c53-8a8e-960f5e974cfc',
      set_name: 'Masters 25',
      set_search_uri:
        'https://api.scryfall.com/cards/search?order=set&q=e%3Aa25&unique=prints',
      set_type: 'masters',
      set_uri:
        'https://api.scryfall.com/sets/41ee6e2f-69b3-4c53-8a8e-960f5e974cfc',
      story_spotlight: false,
      tcgplayer_id: 161443,
      textless: false,
      type_line: 'Sorcery',
      uri: 'https://api.scryfall.com/cards/68c73755-9678-467a-abd5-f8dd1556864e',
      variation: false,
      watermark: 'set',
    } as ScryDataItem,
  ],
  has_more: false,
  object: 'list',
  total_cards: 2,
  /* eslint-enable camelcase */
} as ScryDataList;