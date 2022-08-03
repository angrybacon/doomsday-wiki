import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@/theme/ThemeContext';

if (process.env.MOCK_SCRYFALL === 'true') {
  import('@/mocks/bootstrap');
}

const Application = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;
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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default Application;
