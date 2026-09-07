// oxlint-disable import/max-dependencies
import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren, ReactNode } from 'react';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { Libre_Baskerville, Roboto } from 'next/font/google';

import { Drawer } from '~/components/Drawer/Drawer';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { Sidebar } from '~/components/Sidebar/Sidebar';
import { LayoutProvider } from '~/contexts/Layout';
import { SIDEBAR_WIDTH, TOC_WIDTH } from '~/theme/constants';
import { primary } from '~/theme/palette';
import { theme } from '~/theme/theme';
import { getClock } from '~/tools/clock/getClock';
import { MENU } from '~/tools/markdown/menu';

export const dynamicParams = false;

export const metadata: Metadata = {
  description: 'The Doomsday Wiki',
  keywords: ['Doomsday', 'Legacy', 'Magic: the Gathering'],
  title: { default: 'doomsday.wiki', template: '%s • doomsday.wiki' },
};

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  themeColor: primary[500],
  width: 'device-width',
};

const baskerville = Libre_Baskerville({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-baskerville',
  weight: ['400', '700'],
});

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
});

export default async ({
  children,
  toc,
}: PropsWithChildren<{ toc: ReactNode }>) => {
  const clock = await getClock();
  return (
    <html
      className={[baskerville.variable, roboto.variable].join(' ')}
      // NOTE Tell Next about our smooth scrolling and disable it in navigation
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <Box
        component="body"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          ':has(> #toc)': { 'footer, main': { mr: { md: `${TOC_WIDTH}px` } } },
          'footer, main': { ml: { md: `${SIDEBAR_WIDTH}px` } },
        }}
      >
        <InitColorSchemeScript attribute="data" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <LayoutProvider>
              <CssBaseline />
              <Sidebar>
                <Drawer clock={clock} menu={MENU} />
              </Sidebar>
              <Header />
              <Box
                component="main"
                id="root"
                sx={{
                  alignContent: 'start',
                  columnGap: { xs: 2, sm: 3 },
                  display: 'grid',
                  flexGrow: 1,
                  gridTemplateColumns: '1fr minmax(auto, 1200px) 1fr',
                  py: 3,
                  rowGap: 3,
                  '> *': { gridColumn: 2 },
                }}
              >
                {children}
              </Box>
              {toc}
            </LayoutProvider>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Box>
    </html>
  );
};
