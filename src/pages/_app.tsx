import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@/theme/ThemeContext';

const Application = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <meta content="The Doomsday Wiki" name="description" />
      <meta
        content="minimum-scale=1, initial-scale=1, width=device-width"
        name="viewport"
      />
    </Head>
    {/* TODO Remove once fully migrated to `emotion` */}
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <CssBaseline />
        {/* TODO Provide decklists and menu through a shared context */}
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  </>
);

export default Application;
