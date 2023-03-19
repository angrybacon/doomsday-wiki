import type { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@/theme/ThemeContext';
import { Analytics } from '@vercel/analytics/react';

if (process.env.SCRYFALL_MOCKS === '1') {
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
      <Analytics />
    </>
  );
};

export default Application;
