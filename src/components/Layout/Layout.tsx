import { useRouter } from 'next/router';
import type {
  ElementType,
  FunctionComponent,
  HTMLAttributes,
  ReactChild,
} from 'react';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { GridTypeMap } from '@mui/material/Grid';
import { Theme, alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { SxProps } from '@mui/system';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Title } from '@/components/Title/Title';
import type { Menu } from '@/tools/markdown/types';

interface PropsWithWrapper {
  children: ReactChild | ReactChild[];
  wrapper: ElementType;
  wrapperProps?: HTMLAttributes<HTMLDivElement> & GridTypeMap['props'];
}

interface PropsWithoutWrapper {
  children: ReactChild;
  wrapper?: never;
  wrapperProps?: never;
}

type Props = {
  background?: string;
  menu: Menu;
  title: string;
} & (PropsWithWrapper | PropsWithoutWrapper);

export const Layout: FunctionComponent<Props> = ({
  background,
  children,
  menu,
  title,
  wrapper: Wrapper = Fragment,
  wrapperProps,
}) => {
  const router = useRouter();
  const theme = useTheme();
  // NOTE Prefer `up` over `down` to avoid flickering
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', closeSidebar);
    return () => router.events.off('routeChangeStart', closeSidebar);
  }, [closeSidebar, router]);

  const sx: SxProps<Theme> = [
    { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
    background !== undefined && {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: (theme) => theme.palette.common.white,
      position: 'relative',
      '&:before': {
        backdropFilter: 'blur(4px)',
        backgroundColor: (theme) => alpha(theme.palette.common.black, 0.3),
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
        menu={menu}
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
          <Wrapper {...wrapperProps}>{children}</Wrapper>
        </Container>
        <Footer
          sx={{ mt: 'auto', pt: { xs: 2, sm: 3 }, px: { xs: 2, sm: 3 } }}
        />
      </Box>
    </Box>
  );
};
