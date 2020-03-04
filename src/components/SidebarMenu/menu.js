import EyeOutlineIcon from 'mdi-react/EyeOutlineIcon';
import FileOutlineIcon from 'mdi-react/FileOutlineIcon';
import FlashIcon from 'mdi-react/FlashIcon';
import FlaskOutlineIcon from 'mdi-react/FlaskOutlineIcon';
import PuzzleIcon from 'mdi-react/PuzzleIcon';
import React from 'react';


export default {
  appendices: {icon: <FileOutlineIcon />, order: 4, subtitle: 'Other Resources', title: 'Appendices'},
  ddeft: {icon: <FlaskOutlineIcon />, order: 1, subtitle: 'Experimental Frenzy', title: 'DDEFT'},
  ddft: {icon: <FlashIcon />, order: 0, subtitle: 'Doomsday Fetchland Tendrils', title: 'DDFT'},
  meandeck: {icon: <EyeOutlineIcon />, order: 2, subtitle: "Thassa's Oracle", title: 'Meandeck'},
  puzzles: {icon: <PuzzleIcon />, subtitle: 'Challenge Yourself', title: 'Puzzles'},
};
