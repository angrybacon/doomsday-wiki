import React from 'react';
import EyeOutlineIcon from 'mdi-react/EyeOutlineIcon';
import FileOutlineIcon from 'mdi-react/FileOutlineIcon';
import FlashIcon from 'mdi-react/FlashIcon';
import FlaskOutlineIcon from 'mdi-react/FlaskOutlineIcon';
import NewspaperIcon from 'mdi-react/NewspaperIcon';
import PuzzleIcon from 'mdi-react/PuzzleIcon';

export default {
  appendices: {
    icon: <FileOutlineIcon />,
    order: 3,
    subtitle: 'Other Resources',
    title: 'Appendices',
  },
  articles: {
    icon: <NewspaperIcon />,
    subtitle: 'Article Archive',
    title: 'Articles',
  },
  ddeft: {
    icon: <FlaskOutlineIcon />,
    order: 1,
    subtitle: 'Experimental Frenzy',
    title: 'DDEFT',
  },
  ddft: {
    icon: <FlashIcon />,
    order: 0,
    subtitle: 'Doomsday Fetchland Tendrils',
    title: 'DDFT',
  },
  meandeck: {
    icon: <EyeOutlineIcon />,
    order: 2,
    subtitle: 'Force of Will Doomsday',
    title: 'Meandeck',
  },
  puzzles: {
    icon: <PuzzleIcon />,
    subtitle: 'Challenge Yourself',
    title: 'Puzzles',
  },
};
