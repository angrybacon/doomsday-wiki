import c from 'classnames';
import React, { FunctionComponent, ReactChild } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import type { ScryCard } from '@/tools/scryfall/types';
import { useStyles } from './Card.styles';

export interface Props {
  className?: string;
  data: ScryCard;
}

export const Card: FunctionComponent<Props> = ({ className, data }) => {
  const classes = useStyles();
  const { artist, images, name, setName } = data;
  const image = images.full;

  if (!image) return null;

  const titleLines: string[] = [
    `"${name}" from ${setName}`,
    `Art by ${artist}`,
  ];

  const title: ReactChild[] = titleLines.map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={`line-${index}`}>{line}</div>
  ));

  return (
    <Tooltip arrow classes={{ tooltip: classes.tooltip }} title={title}>
      <img
        alt={titleLines.join(' - ')}
        className={c(classes.image, className)}
        loading="lazy"
        src={image}
      />
    </Tooltip>
  );
};
