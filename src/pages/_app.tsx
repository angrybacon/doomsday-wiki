import { CssBaseline } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import { type AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@/theme/ThemeContext';

export default function Application(props: AppProps) {
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
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </>
  );
}
