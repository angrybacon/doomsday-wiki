import { Category as C } from '@/tools/markdown/constants/Category';

/** Commonly used acronyms and their corresponding category. */
export const CARDS: Record<string, [string, C[]]> =
  // prettier-ignore
  {
    AoI:  ['Act on Impulse',            [C.DDEFT, C.DDFT]],
    BS:   ['Brainstorm',                []],
    BW:   ['Burning Wish',              [C.DDFT]],
    CB:   ["Conjurer's Bauble",         [C.DDFT]],
    CR:   ['Cabal Ritual',              []],
    CT:   ['Cabal Therapy',             []],
    CoS:  ['Cavern of Souls',           []],
    CoV:  ['Chain of Vapor',            []],
    Con:  ['Consider',                  [C.DDFT, C.ENTOMBSDAY, C.MEANDECK]],
    DA:   ['Deep Analysis',             [C.MEANDECK]],
    DD:   ['Doomsday',                  []],
    DR:   ['Dark Ritual',               []],
    DW:   ['Divining Witch',            []],
    Dur:  ['Duress',                    []],
    EF:   ['Experimental Frenzy',       [C.DDEFT]],
    ET:   ['Echoing Truth',             []],
    Em:   ['Emrakul, the Aeons Torn',   []],
    EoA:  ['Edge of Autumn',            [C.DDFT, C.ENTOMBSDAY, C.MEANDECK]],
    EoE:  ['Echo of Eons',              [C.DDFT, C.MEANDECK]],
    EtW:  ['Empty the Warrens',         [C.DDEFT, C.DDFT]],
    FoN:  ['Force of Negation',         []],
    FoW:  ['Force of Will',             []],
    GP:   ['Gitaxian Probe',            [C.DDFT, C.MEANDECK]],
    IC:   ['Infernal Contract',         [C.DDFT]],
    IU:   ['Ideas Unbound',             [C.DDFT, C.ENTOMBSDAY, C.MEANDECK]],
    LDV:  ["Lim-Dul's Vault",           [C.DDEFT, C.ENTOMBSDAY, C.MEANDECK]],
    LED:  ["Lion's Eye Diamond",        []],
    LM:   ['Laboratory Maniac',         []],
    LP:   ['Lotus Petal',               []],
    Mm:   ['Manamorphose',              [C.DDFT]],
    NW:   ["Night's Whisper",           [C.MEANDECK]],
    PT:   ['Personal Tutor',            [C.ENTOMBSDAY, C.MEANDECK]],
    Pdt:  ['Predict',                   [C.ENTOMBSDAY, C.MEANDECK]],
    PiF:  ['Past in Flames',            [C.DDFT]],
    Pnd:  ['Ponder',                    []],
    PoN:  ['Pact of Negation',          [C.DDEFT, C.ENTOMBSDAY, C.MEANDECK]],
    Pre:  ['Preordain',                 []],
    REB:  ['Red Elemental Blast',       []],
    SE:   ['Surgical Extraction',       []],
    SI:   ['Shelldock Isle',            []],
    SW:   ['Street Wraith',             []],
    SdT:  ["Sensei's Divining Top",     []],
    SotV: ['Spoils of the Vault',       [C.DDFT]],
    StP:  ['Swords to Plowshares',      []],
    TO:   ["Thassa's Oracle",           []],
    TW:   ['Three Wishes',              [C.DDEFT, C.DDFT]],
    ToA:  ['Tendrils of Agony',         []],
    Tsz:  ['Thoughtseize',              []],
    VoS:  ['Veil of Summer',            [C.DDFT, C.MEANDECK]],
  };
