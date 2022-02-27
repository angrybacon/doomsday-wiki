import React, { FunctionComponent, HTMLAttributes } from 'react';
import Chip, { ChipTypeMap } from '@mui/material/Chip';
import { Kind } from '@/tools/markdown/constants/Kind';
import { useStyles } from './ArticleChip.styles';

interface Props {
  kind: Kind;
}

export const ArticleChip: FunctionComponent<Props> = ({ kind }) => {
  const classes = useStyles();

  const properties: Record<
    Kind,
    ChipTypeMap['props'] & HTMLAttributes<HTMLDivElement>
  > = {
    [Kind.ARTICLE]: { className: classes.article, label: 'Article' },
    [Kind.PRIMER]: { className: classes.primer, label: 'Primer' },
    [Kind.REPORT]: { className: classes.report, label: 'Report' },
  };

  return <Chip size="small" variant="outlined" {...properties[kind]} />;
};
