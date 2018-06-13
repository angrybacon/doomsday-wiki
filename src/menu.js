import React from 'react';

import AlertOctagon from 'mdi-material-ui/AlertOctagon';
import Baby from 'mdi-material-ui/Baby';
import ChessKnight from 'mdi-material-ui/ChessKnight';
import FileOutline from 'mdi-material-ui/FileOutline';
import Puzzle from 'mdi-material-ui/Puzzle';
import Target from 'mdi-material-ui/Target';
import Wrench from 'mdi-material-ui/Wrench';


const MENU = [

  {
    label: 'Chapter 1, the Fundamentals', icon: <Baby />, routes: [
      {text: 'Basics',                         href: '/archives/1/basics/'},
      {text: 'Brainstorm',                     href: '/archives/1/brainstorm/'},
      {text: 'Laboratory Maniac',              href: '/archives/1/laboratory-maniac/'},
      {text: 'Pass the Turn',                  href: '/archives/1/pass-the-turn/'},
    ]
  },

  {
    label: 'Chapter 2, Supplementary Techniques', icon: <Target />, routes: [
      {text: 'Conjurer\'s Bauble',             href: '/archives/2/conjurers-bauble/'},
      {text: 'Shelldock Isle',                 href: '/archives/2/shelldock-isle/'},
      {text: 'Double Doomsday Piles',          href: '/archives/2/double-doomsday/'},
      {text: 'Time Spiral Piles',              href: '/archives/2/time-spiral/'},
    ]
  },

  {
    label: 'Chapter 3, Limitations', icon: <AlertOctagon />, routes: [
      {text: 'Playing Around Surgical',        href: '/archives/3/surgical-extraction/'},
      {text: 'CMC Limitations',                href: '/archives/3/cmc/'},
    ]
  },

  {label: 'Chapter 4, Deck Construction', icon: <Wrench />},

  {label: 'Chapter 5, Gameplay Strategies', icon: <ChessKnight />},

  {label: 'Chapter 6, Puzzles', icon: <Puzzle />},

  {
    label: 'Postamble, Appendices', icon: <FileOutline />, routes: [
      {text: 'Pile Document',                  href: '/archives/appendices/piles/'},
      {text: 'Puzzle answers'},
      {text: 'Sample Decklists',               href: '/archives/appendices/decklists/'},
      {text: 'Interesting Card Interactions',  href: '/archives/appendices/interactions/'},
      {text: 'Removal Tables',                 href: '/archives/appendices/removal-tables/'},
      {text: 'Doomsday Resources',             href: '/archives/appendices/resources/'},
    ]
  },

];

export default MENU;
