import c from 'classnames';
import React, { FunctionComponent } from 'react';
import type { ScryData } from '@/tools/scryfall/types';
import { useStyles } from './Card.styles';

export interface Props {
  className?: string;
  data: ScryData;
  query: string;
}

export const Card: FunctionComponent<Props> = ({ className, data, query }) => {
  const classes = useStyles();
  const { image_uris: images, name } = data;
  const image = images?.png;
  return (
    image && (
      <img
        alt={name || query}
        className={c(classes.root, className)}
        src={image}
      />
    )
  );
};
