import NextApplication, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@/theme/ThemeContext';
import { getDecklists } from '@/tools/decklists/getDecklists';
import { getPartials } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type { ExtraPageProps } from '@/interfaces/page.model';

const Application = ({
  Component,
  decklists,
  menu,
  pageProps,
  partials,
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
      <ThemeProvider>
        <CssBaseline />
        {/* TODO Provide decklists and menu through a shared context */}
        <Component
          {...pageProps}
          decklists={decklists}
          menu={menu}
          partials={partials}
        />
      </ThemeProvider>
    </>
  );
};

Application.getInitialProps = async (context: AppContext) => {
  const props = await NextApplication.getInitialProps(context);
  return {
    ...props,
    decklists: getDecklists(),
    menu: getMenu(),
    partials: await getPartials(),
  };
};

export default Application;
