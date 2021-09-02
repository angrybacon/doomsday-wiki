import NextApplication from 'next/app';
import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@/theme/theme';
import { getDecklists } from '@/tools/decklists/getDecklists';
import { getMenu } from '@/tools/markdown/getMenu';
import type { ExtraPageProps } from '@/interfaces/page.model';

const Application = ({
  Component,
  decklists,
  menu,
  pageProps,
}: AppProps & ExtraPageProps): JSX.Element => {
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
        {/* TODO Provide menu through a shared context */}
        <Component {...pageProps} decklists={decklists} menu={menu} />
      </ThemeProvider>
    </>
  );
};

Application.getInitialProps = async (context: AppContext) => {
  const props = await NextApplication.getInitialProps(context);
  return { ...props, decklists: getDecklists(), menu: getMenu() };
};

export default Application;
