import React from 'react';

import AlertOctagonIcon from 'mdi-react/AlertOctagonIcon';
import BabyIcon from 'mdi-react/BabyIcon';
import FileOutlineIcon from 'mdi-react/FileOutlineIcon';
import PuzzleIcon from 'mdi-react/PuzzleIcon';
import TargetIcon from 'mdi-react/TargetIcon';


export default [

  {
    icon: <BabyIcon />,
    label: 'Chapter 1, the Fundamentals',
    routes: [
      {text: 'Basics',                         href: '/chapters/1/basics/'},
      {text: 'Brainstorm',                     href: '/chapters/1/brainstorm/'},
      {text: 'Laboratory Maniac',              href: '/chapters/1/laboratory-maniac/'},
    ]
  },

  {
    icon: <TargetIcon />,
    label: 'Chapter 2, Supplementary Techniques',
    routes: [
      {text: 'Passing the Turn',               href: '/chapters/2/pass-the-turn/'},
      {text: "Conjurer's Bauble",              href: '/chapters/2/conjurers-bauble/'},
      {text: 'Uncommon Piles',                 href: '/chapters/2/uncommon-piles/'},
    ]
  },

  {
    icon: <AlertOctagonIcon />,
    label: 'Chapter 3, Limitations',
    routes: [
      {text: 'Playing Around Surgical',        href: '/chapters/3/surgical-extraction/'},
      {text: 'CMC Limitations',                href: '/chapters/3/cmc/'},
    ]
  },

  {
    icon: <PuzzleIcon />,
    label: 'Chapter 4, Puzzles',
    routes: [
      {text: '1',                              href: '/puzzles/1/'},
    ]
  },

  {
    icon: <FileOutlineIcon />,
    label: 'Postamble, Appendices',
    routes: [
      {text: 'Primer',                         href: '/appendices/primer/'},
      {text: 'Pile Document',                  href: '/appendices/piles/'},
      {text: 'Sample Decklists',               href: '/appendices/decklists/'},
      {text: 'Interesting Card Interactions',  href: '/appendices/interactions/'},
      {text: 'Removal Tables',                 href: '/appendices/removal-tables/'},
      {text: 'Doomsday Resources',             href: '/appendices/resources/'},
    ]
  }
];
