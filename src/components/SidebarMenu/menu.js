import AlertOctagonIcon from 'mdi-react/AlertOctagonIcon';
import BabyIcon from 'mdi-react/BabyIcon';
import FileOutlineIcon from 'mdi-react/FileOutlineIcon';
import PuzzleIcon from 'mdi-react/PuzzleIcon';
import TargetIcon from 'mdi-react/TargetIcon';
import React from 'react';


export default {
  1: {icon: <BabyIcon />, subheader: 'The Fundamentals'},
  2: {icon: <TargetIcon />, subheader: 'Supplementary Techniques'},
  3: {icon: <AlertOctagonIcon />, subheader: 'Limitations'},
  appendices: {icon: <FileOutlineIcon />, order: 4, subtitle: 'Other Resources', title: 'Appendices'},
  puzzles: {icon: <PuzzleIcon />, subtitle: 'Challenge Yourself', title: 'Puzzles'},
};
