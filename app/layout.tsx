import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
} from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { type Metadata, type Viewport } from 'next';
import { Roboto } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { Drawer } from '@/components/Drawer/Drawer';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { LayoutProvider } from '@/contexts/Layout';
import { TrackingProvider } from '@/contexts/Tracking';
import { primary } from '@/theme/palette';
import { theme } from '@/theme/theme';
import { MENU } from '@/tools/markdown/menu';

import '@fontsource/libre-baskerville';

export const dynamicParams = false;

export const metadata: Metadata = {
  description: 'The Doomsday Wiki',
  title: { default: 'doomsday.wiki', template: '%s • doomsday.wiki' },
};

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: primary[500],
  width: 'device-width',
};

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
});

export default ({ children }: PropsWithChildren) => (
  <Box
    component="html"
    lang="en"
    suppressHydrationWarning
    // NOTE Pad with the tallest toolbar: extra spacing in mobile, who's going
    //      to complain?
    sx={{ scrollPaddingTop: 64 }}
  >
    <Box className={roboto.variable} component="body" sx={{ display: 'flex' }}>
      <InitColorSchemeScript attribute="class" />
      <TrackingProvider>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LayoutProvider>
              <Sidebar>
                <Drawer menu={MENU} />
              </Sidebar>
              <Header />
              <Container
                component="main"
                maxWidth="xl"
                sx={{
                  display: 'grid',
                  gridTemplateAreas:
                    '"offset offset" "banner banner" "content toc" "footer toc"',
                  gridTemplateColumns: '1fr auto',
                  gridTemplateRows: 'auto auto 1fr auto',
                  minHeight: '100vh',
                }}
              >
                <Toolbar role="presentation" sx={{ gridArea: 'offset' }} />
                <Box
                  sx={{
                    display: 'contents',
                    overflowWrap: 'anywhere',
                    '> *': { mt: { xs: 2, sm: 3 } },
                  }}
                >
                  {children}
                </Box>
                <Footer
                  sx={{
                    gridArea: 'footer',
                    pb: 3,
                    position: 'relative', // NOTE Force content above 404 background
                    pt: 8,
                  }}
                />
              </Container>
            </LayoutProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </TrackingProvider>
    </Box>
  </Box>
);
