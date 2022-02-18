import c from 'classnames';
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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Title } from '@/components/Title/Title';
import type { Menu } from '@/tools/markdown/types';
import { useStyles } from './Layout.styles';

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
  className?: string;
  menu: Menu;
  title?: string;
} & (PropsWithWrapper | PropsWithoutWrapper);

export const Layout: FunctionComponent<Props> = ({
  children,
  className,
  menu,
  title,
  wrapper: Wrapper = Fragment,
  wrapperProps,
}) => {
  const router = useRouter();
  const classes = useStyles();
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

  return (
    <Box
      className={className}
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      {title && <Title title={title} />}
      <Header isMobile={!isDesktop} onSidebarOpen={openSidebar} />
      <Sidebar
        menu={menu}
        isMobile={!isDesktop}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      <Box
        className={c(classes.container, { mobile: !isDesktop })}
        display="flex"
        flexDirection="column"
        flexGrow="1"
      >
        <Container component={Box} maxWidth="lg">
          <Wrapper {...wrapperProps}>{children}</Wrapper>
        </Container>
        <Footer className={c(classes.footer, classes.sidebar)} />
      </Box>
    </Box>
  );
};
