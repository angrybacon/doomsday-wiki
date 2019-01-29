import React from 'react';

import AlertOctagonIcon from 'mdi-react/AlertOctagonIcon';
import BabyIcon from 'mdi-react/BabyIcon';
import ChessKnightIcon from 'mdi-react/ChessKnightIcon';
import FileOutlineIcon from 'mdi-react/FileOutlineIcon';
import PuzzleIcon from 'mdi-react/PuzzleIcon';
import TargetIcon from 'mdi-react/TargetIcon';
import WrenchIcon from 'mdi-react/WrenchIcon';


export default [

  {
    label: 'Chapter 1, the Fundamentals', icon: <BabyIcon />, routes: [
      {text: 'Basics',                         href: '/chapters/1/basics/'},
      {text: 'Brainstorm',                     href: '/chapters/1/brainstorm/'},
      {text: 'Laboratory Maniac',              href: '/chapters/1/laboratory-maniac/'},
    ]
  },

  {
    label: 'Chapter 2, Supplementary Techniques', icon: <TargetIcon />, routes: [
      {text: 'Passing the Turn',                  href: '/chapters/2/pass-the-turn/'},
      {text: 'Conjurer\'s Bauble',             href: '/chapters/2/conjurers-bauble/'},
      {text: 'Uncommon Piles',                 href: '/chapters/2/uncommon-piles/'},
    ]
  },

  {
    label: 'Chapter 3, Limitations', icon: <AlertOctagonIcon />, routes: [
      {text: 'Playing Around Surgical',        href: '/chapters/3/surgical-extraction/'},
      {text: 'CMC Limitations',                href: '/chapters/3/cmc/'},
    ]
  },

  {label: 'Chapter 4, Deck Construction', icon: <WrenchIcon />},

  {label: 'Chapter 5, Gameplay Strategies', icon: <ChessKnightIcon />},

  {
    label: 'Chapter 6, Puzzles', icon: <PuzzleIcon />, routes: [
      {text: '1',                              href: '/puzzles/1/'},
    ]
  },

  {
    label: 'Postamble, Appendices', icon: <FileOutlineIcon />, routes: [
      {text: 'Primer',                         href: '/appendices/primer/'},
      {text: 'Pile Document',                  href: '/appendices/piles/'},
      {text: 'Sample Decklists',               href: '/appendices/decklists/'},
      {text: 'Interesting Card Interactions',  href: '/appendices/interactions/'},
      {text: 'Removal Tables',                 href: '/appendices/removal-tables/'},
      {text: 'Doomsday Resources',             href: '/appendices/resources/'},
    ]
  }
];
