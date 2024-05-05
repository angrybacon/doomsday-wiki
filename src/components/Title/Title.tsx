import Head from 'next/head';
import { type FunctionComponent } from 'react';

type Props = {
  title?: string;
};

export const Title: FunctionComponent<Props> = ({ title }) => (
  <Head>
    <title key="title">{title ? `${title} • ` : ''}doomsday.wiki</title>
  </Head>
);
