import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@/theme/theme';

type ApplicationFunction = (props: AppProps) => JSX.Element;

const Application: ApplicationFunction = ({ Component, pageProps }) => {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default Application;
