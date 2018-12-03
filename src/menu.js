import React from 'react';

import AlertOctagon from 'mdi-material-ui/AlertOctagon';
import Baby from 'mdi-material-ui/Baby';
import ChessKnight from 'mdi-material-ui/ChessKnight';
import FileOutline from 'mdi-material-ui/FileOutline';
import Puzzle from 'mdi-material-ui/Puzzle';
import Target from 'mdi-material-ui/Target';
import Wrench from 'mdi-material-ui/Wrench';


export const PUZZLES = [
  {
    title: 'Tier 1', href: '/puzzles/1/', routes: [
      {text: 'A',                              href: '/puzzles/1/a/'},
      {text: 'B',                              href: '/puzzles/1/b/'},
    ]
  },
];


export const MENU = [

  {
    label: 'Chapter 1, the Fundamentals', icon: <Baby />, routes: [
      {text: 'Basics',                         href: '/chapters/1/basics/'},
      {text: 'Brainstorm',                     href: '/chapters/1/brainstorm/'},
      {text: 'Laboratory Maniac',              href: '/chapters/1/laboratory-maniac/'},
      {text: 'Pass the Turn',                  href: '/chapters/1/pass-the-turn/'},
    ]
  },

  {
    label: 'Chapter 2, Supplementary Techniques', icon: <Target />, routes: [
      {text: 'Conjurer\'s Bauble',             href: '/chapters/2/conjurers-bauble/'},
      {text: 'Shelldock Isle',                 href: '/chapters/2/shelldock-isle/'},
      {text: 'Double Doomsday Piles',          href: '/chapters/2/double-doomsday/'},
      {text: 'Time Spiral Piles',              href: '/chapters/2/time-spiral/'},
    ]
  },

  {
    label: 'Chapter 3, Limitations', icon: <AlertOctagon />, routes: [
      {text: 'Playing Around Surgical',        href: '/chapters/3/surgical-extraction/'},
      {text: 'CMC Limitations',                href: '/chapters/3/cmc/'},
    ]
  },

  {label: 'Chapter 4, Deck Construction', icon: <Wrench />},

  {label: 'Chapter 5, Gameplay Strategies', icon: <ChessKnight />},

  {
    label: 'Chapter 6, Puzzles', icon: <Puzzle />, routes: [
      {text: '1',                              href: '/puzzles/1/'},
    ]
  },

  {
    label: 'Postamble, Appendices', icon: <FileOutline />, routes: [
      {text: 'Primer',                         href: '/appendices/primer/'},
      {text: 'Pile Document',                  href: '/appendices/piles/'},
      {text: 'Sample Decklists',               href: '/appendices/decklists/'},
      {text: 'Interesting Card Interactions',  href: '/appendices/interactions/'},
      {text: 'Removal Tables',                 href: '/appendices/removal-tables/'},
      {text: 'Doomsday Resources',             href: '/appendices/resources/'},
    ]
  },

];
