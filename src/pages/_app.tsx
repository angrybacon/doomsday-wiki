import NextApplication from 'next/app';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@/theme/ThemeContext';
import { getClockCached } from '@/tools/clock/getClockCached';

if (process.env.SCRYFALL_MOCKS === 'true') {
  import('@/mocks/bootstrap');
}

interface Props extends AppInitialProps {
  clock: string | null;
}

const Application = (props: AppProps & Props): JSX.Element => {
  const { Component, clock, pageProps } = props;
  const componentProps = { ...pageProps, ...(clock && { clock }) };
  return (
    <>
      <Head>
        <meta content="The Doomsday Wiki" name="description" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        {/* TODO Provide decklists and menu through a shared context */}
        <Component {...componentProps} />
      </ThemeProvider>
    </>
  );
};

Application.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps & Props> => {
  const props: AppInitialProps = await NextApplication.getInitialProps(context);
  return { ...props, clock: await getClockCached() };
};

export default Application;
