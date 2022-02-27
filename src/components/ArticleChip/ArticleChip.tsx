import c from 'classnames';
import React, { FunctionComponent, HTMLAttributes } from 'react';
import Chip, { ChipTypeMap } from '@mui/material/Chip';
import { Kind } from '@/tools/markdown/constants/Kind';
import { useStyles } from './ArticleChip.styles';

interface Props {
  kind: Kind;
}

export const ArticleChip: FunctionComponent<Props> = ({ kind }) => {
  const classes = useStyles();

  const configuration: Record<
    Kind,
    ChipTypeMap['props'] & HTMLAttributes<HTMLDivElement>
  > = {
    [Kind.ARTICLE]: { className: classes.article, label: 'Article' },
    [Kind.PRIMER]: { className: classes.primer, label: 'Primer' },
    [Kind.REPORT]: { className: classes.report, label: 'Report' },
  };

  const properties = {
    ...configuration[kind],
    className: c(classes.root, configuration[kind].className),
  };

  return <Chip size="small" {...properties} />;
};
