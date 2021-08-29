import c from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { scry } from '@/tools/scryfall/scry';
import { useStyles } from './Card.styles';

interface CardModel {
  image?: string;
  name?: string;
}

interface Props {
  className?: string;
  query: string;
}

export const Card: FunctionComponent<Props> = ({ className, query }) => {
  const [card, setCard] = useState<CardModel>({});
  const classes = useStyles();

  const onSearch = async (name: string, set?: string) => {
    try {
      const { data } = await scry(name, set);
      setCard({
        image: data.image_uris.png,
        name: data.name,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const [name, set] = query.split('|').map((it) => it.trim());
    onSearch(name, set);
  }, [query]);

  return (
    <img
      alt={card.name}
      className={c(classes.root, className)}
      src={card.image}
    />
  );
};
