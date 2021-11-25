import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@/theme/ThemeContext';

const Application = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const styles = document.querySelector('#jss-server-side');
    styles?.parentElement?.removeChild(styles);
  }, []);

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
