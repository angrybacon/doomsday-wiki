import c from 'classnames';
import React, { FunctionComponent } from 'react';
import type { ScryDataItem } from '@/tools/scryfall/types';
import { useStyles } from './Card.styles';

export interface Props {
  className?: string;
  data: ScryDataItem;
  query: string;
}

export const Card: FunctionComponent<Props> = ({ className, data, query }) => {
  const classes = useStyles();
  const { image_uris: images, name } = data;
  const image = images?.border_crop;
  const title: string = name || query;
  if (!image) return null;
  return (
    <img
      alt={title}
      className={c(classes.root, className)}
      src={image}
      title={title}
    />
  );
};
