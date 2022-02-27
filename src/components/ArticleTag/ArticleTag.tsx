import React, { FunctionComponent } from 'react';
import Chip from '@mui/material/Chip';
import { Tag } from '@/tools/markdown/constants/Tag';
import { useStyles } from './ArticleTag.styles';

interface Props {
  tag: Tag;
}

export const ArticleTag: FunctionComponent<Props> = ({ tag }) => {
  const classes = useStyles();
  return (
    <Chip
      className={classes.root}
      label={tag}
      size="small"
      variant="outlined"
    />
  );
};
