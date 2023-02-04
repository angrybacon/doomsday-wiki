import Head from 'next/head';
import { FunctionComponent } from 'react';

interface Props {
  title?: string;
}

export const Title: FunctionComponent<Props> = ({ title }) => (
  <Head>
    <title key="title">{title ? `${title} • ` : ''}doomsday.wiki</title>
  </Head>
);
