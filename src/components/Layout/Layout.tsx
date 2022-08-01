import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import type { FunctionComponent, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { SxProps } from '@mui/system';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Title } from '@/components/Title/Title';
import type { Menu } from '@/tools/markdown/types';

interface Props {
  background?: string;
  children: ReactNode;
  menu: Menu;
  title: string;
}

export const Layout: FunctionComponent<Props> = ({
  background,
  children,
  menu,
  title,
}) => {
  const router = useRouter();
  const theme = useTheme();
  // NOTE Prefer `up` over `down` to avoid flickering
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isClear = !!background;

  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);

  useEffect(() => {
    router.events.on('routeChangeStart', closeSidebar);
    return () => router.events.off('routeChangeStart', closeSidebar);
  }, [closeSidebar, router]);

  const sx: SxProps<Theme> = [
    { display: 'flex', flexDirection: 'column', minHeight: '100%' },
    background !== undefined && {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: (theme) => theme.palette.common.white,
      position: 'relative',
      '&:before': {
        backdropFilter: 'blur(4px)',
        bottom: 0,
        content: '""',
        display: 'block',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
      },
    },
  ];

  return (
    <Box sx={sx}>
      <Title title={title} />
      <Header isMobile={!isDesktop} onSidebarOpen={openSidebar} />
      <Sidebar
        category={`${router.query.category}`}
        menu={menu}
        isClear={isClear}
        isMobile={!isDesktop}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      <Box
        sx={[
          {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            ml: (theme) => theme.drawer.width,
            my: { xs: 2, sm: 3 },
            position: 'relative',
          },
          !isDesktop && { ml: 0 },
        ]}
      >
        <Container component={Box} maxWidth="lg">
          {children}
        </Container>
        <Footer
          isClear={isClear}
          sx={{ mt: 'auto', pt: { xs: 2, sm: 3 }, px: { xs: 2, sm: 3 } }}
        />
      </Box>
    </Box>
  );
};
