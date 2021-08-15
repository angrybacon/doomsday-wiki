import c from 'classnames';
import React, { FunctionComponent, ReactChild, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Title } from '@/components/Title/Title';
import type { Menu } from '@/tools/markdown/types';
import { useStyles } from '@/components/Layout/Layout.styles';

type OnSidebarToggle = (value: boolean) => () => void;

type Props = {
  maxWidth?: Breakpoint;
  menu: Menu;
  title?: string;
} & (
  | { children: ReactChild | ReactChild[]; grid: boolean }
  | { children: ReactChild; grid?: never }
);

export const Layout: FunctionComponent<Props> = ({
  children,
  grid,
  maxWidth,
  menu,
  title,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onSidebarToggle: OnSidebarToggle = (value) => () => {
    setIsSidebarOpen(value);
  };

  const content = grid ? (
    <Grid container spacing={2}>
      {children}
    </Grid>
  ) : (
    children
  );

  return (
    <>
      {title && <Title title={title} />}
      <Header isMobile={isMobile} onSidebarOpen={onSidebarToggle(true)} />
      <Sidebar
        menu={menu}
        isMobile={isMobile}
        isOpen={isSidebarOpen}
        onClose={onSidebarToggle(false)}
      />
      <div className={c(classes.container, { mobile: isMobile })}>
        <Container component={Box} maxWidth={maxWidth} py={3}>
          {content}
        </Container>
        <Footer />
      </div>
    </>
  );
};
