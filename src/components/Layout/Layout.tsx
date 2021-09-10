import c from 'classnames';
import { useRouter } from 'next/router';
import type {
  ElementType,
  FunctionComponent,
  HTMLAttributes,
  ReactChild,
} from 'react';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import type { GridTypeMap } from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Title } from '@/components/Title/Title';
import type { Menu } from '@/tools/markdown/types';
import { useStyles } from './Layout.styles';

type Props = {
  maxWidth?: Breakpoint;
  menu: Menu;
  title?: string;
} & (
  | {
      children: ReactChild | ReactChild[];
      wrapper: ElementType;
      wrapperProps?: HTMLAttributes<HTMLDivElement> & GridTypeMap['props'];
    }
  | {
      children: ReactChild;
      wrapper?: never;
      wrapperProps?: never;
    }
);

export const Layout: FunctionComponent<Props> = ({
  children,
  maxWidth,
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
    <>
      {title && <Title title={title} />}
      <Header isMobile={!isDesktop} onSidebarOpen={openSidebar} />
      <Sidebar
        menu={menu}
        isMobile={!isDesktop}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      <div className={c(classes.container, { mobile: !isDesktop })}>
        <Container component={Box} maxWidth={maxWidth} py={3}>
          <Wrapper {...wrapperProps}>{children}</Wrapper>
        </Container>
        <Footer />
      </div>
    </>
  );
};
