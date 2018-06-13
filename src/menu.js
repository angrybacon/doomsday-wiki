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
      {text: 'Conjurer\'s Bauble',             href: 'http://ddft.wiki/pages-output/ch2/double-doomsday'},
      {text: 'Shelldock Isle/Emrakul',         href: 'http://ddft.wiki/pages-output/ch2/shelldock-emrakul'},
      {text: 'Double Doomsday Piles',          href: 'http://ddft.wiki/pages-output/ch2/double-doomsday'},
      {text: 'Time Spiral Piles',              href: 'http://ddft.wiki/pages-output/ch2/doomsday-timespiral'},
    ]
  },

  {
    label: 'Chapter 3, Limitations', icon: <AlertOctagon />, routes: [
      {text: 'Playing Around Surgical',        href: 'http://ddft.wiki/pages-output/ch3/surgical'},
      {text: 'CMC Limitations',                href: '/archives/3/cmc/'},
    ]
  },

  {
    label: 'Chapter 4, Deck Construction', icon: <Wrench />, routes: [
      {text: 'Under construction'},
    ]
  },

  {
    label: 'Chapter 5, Gameplay Strategies', icon: <ChessKnight />, routes: [
      {text: 'Under construction'},
    ]
  },

  {
    label: 'Chapter 6, Puzzles', icon: <Puzzle />, routes: [
      {text: 'Under construction'},
    ]
  },

  {
    label: 'Postamble, Appendices', icon: <FileOutline />, routes: [
      {text: 'Pile Document',                  href: 'http://ddft.wiki/pages-output/appendix/rem_table'},
      {text: 'Puzzle answers'},
      {text: 'Sample Decklists',               href: 'http://ddft.wiki/pages-output/appendix/Decklist'},
      {text: 'Interesting Card Interactions',  href: 'http://ddft.wiki/pages-output/appendix/interesting-interactions'},
      {text: 'Removal Tables',                 href: 'http://ddft.wiki/pages-output/appendix/rem_table'},
      {text: 'Doomsday Resources',             href: 'http://ddft.wiki/pages-output/appendix/external_resources'},
    ]
  },

];

export default MENU;
