import c from 'classnames';
import React, { FunctionComponent, HTMLAttributes } from 'react';
import Chip, { ChipTypeMap } from '@mui/material/Chip';
import { Kind } from '@/tools/markdown/constants/Kind';
import { useStyles } from './ArticleKind.styles';

interface Props {
  className?: string;
  kind: Kind;
}

export const ArticleKind: FunctionComponent<Props> = ({ className, kind }) => {
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
    className: c(classes.root, configuration[kind].className, className),
  };

  return <Chip size="small" {...properties} />;
};
