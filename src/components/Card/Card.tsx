import c from 'classnames';
import React, { FunctionComponent, ReactChild } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import type { ScryDataItem } from '@/tools/scryfall/types';
import { useStyles } from './Card.styles';

export interface Props {
  className?: string;
  data: ScryDataItem;
}

export const Card: FunctionComponent<Props> = ({ className, data }) => {
  const classes = useStyles();
  const { artist, image_uris: imageUris, name, set_name: setName } = data;
  const image = imageUris?.border_crop;

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
        src={image}
      />
    </Tooltip>
  );
};
