import { type Category } from '@/tools/markdown/constants/Category';

/** Commonly used acronyms and their corresponding category. */
export const CARDS: Record<string, [string, (keyof typeof Category)[]]> =
  // prettier-ignore
  {
    AoI:  ['Act on Impulse',            ['DDEFT', 'DDFT']],
    BS:   ['Brainstorm',                []],
    BW:   ['Burning Wish',              ['DDFT']],
    CB:   ["Conjurer's Bauble",         ['DDFT']],
    CR:   ['Cabal Ritual',              []],
    CT:   ['Cabal Therapy',             []],
    CoS:  ['Cavern of Souls',           []],
    CoV:  ['Chain of Vapor',            []],
    Con:  ['Consider',                  ['DDFT', 'ENTOMBSDAY', 'MEANDECK']],
    DA:   ['Deep Analysis',             ['MEANDECK']],
    DD:   ['Doomsday',                  []],
    DR:   ['Dark Ritual',               []],
    DW:   ['Divining Witch',            []],
    Dur:  ['Duress',                    []],
    EF:   ['Experimental Frenzy',       ['DDEFT']],
    ET:   ['Echoing Truth',             []],
    Em:   ['Emrakul, the Aeons Torn',   []],
    EoA:  ['Edge of Autumn',            ['DDFT', 'ENTOMBSDAY', 'MEANDECK']],
    EoE:  ['Echo of Eons',              ['DDFT', 'MEANDECK']],
    EtW:  ['Empty the Warrens',         ['DDEFT', 'DDFT']],
    FoN:  ['Force of Negation',         []],
    FoW:  ['Force of Will',             []],
    GP:   ['Gitaxian Probe',            ['DDFT', 'MEANDECK']],
    IC:   ['Infernal Contract',         ['DDFT']],
    IU:   ['Ideas Unbound',             ['DDFT', 'ENTOMBSDAY', 'MEANDECK']],
    LDV:  ["Lim-Dul's Vault",           ['DDEFT', 'ENTOMBSDAY', 'MEANDECK']],
    LED:  ["Lion's Eye Diamond",        []],
    LM:   ['Laboratory Maniac',         []],
    LP:   ['Lotus Petal',               []],
    Mm:   ['Manamorphose',              ['DDFT']],
    NW:   ["Night's Whisper",           ['MEANDECK']],
    PT:   ['Personal Tutor',            ['ENTOMBSDAY', 'MEANDECK']],
    Pdt:  ['Predict',                   ['ENTOMBSDAY', 'MEANDECK']],
    PiF:  ['Past in Flames',            ['DDFT']],
    Pnd:  ['Ponder',                    []],
    PoN:  ['Pact of Negation',          ['DDEFT', 'ENTOMBSDAY', 'MEANDECK']],
    Pre:  ['Preordain',                 []],
    REB:  ['Red Elemental Blast',       []],
    SE:   ['Surgical Extraction',       []],
    SI:   ['Shelldock Isle',            []],
    SW:   ['Street Wraith',             []],
    SdT:  ["Sensei's Divining Top",     []],
    SotV: ['Spoils of the Vault',       ['DDFT']],
    StP:  ['Swords to Plowshares',      []],
    TO:   ["Thassa's Oracle",           []],
    TW:   ['Three Wishes',              ['DDEFT', 'DDFT']],
    ToA:  ['Tendrils of Agony',         []],
    Tsz:  ['Thoughtseize',              []],
    VoS:  ['Veil of Summer',            ['DDFT', 'MEANDECK']],
  };
