import NextApplication from 'next/app';
import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@/theme/theme';
import { getChapters } from '@/tools/markdown/getChapters';
import type { WithChapters } from '@/tools/markdown/types';

type ApplicationProps = AppProps & WithChapters;

const Application = ({
  Component,
  chapters,
  pageProps,
}: ApplicationProps): JSX.Element => {
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
        <Component {...pageProps} chapters={chapters} />
      </ThemeProvider>
    </>
  );
};

Application.getInitialProps = async (context: AppContext) => {
  const props = await NextApplication.getInitialProps(context);
  return { ...props, chapters: getChapters() };
};

export default Application;
