import c from 'classnames';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import type { ChapterEntry } from '@/tools/markdown/types';
import { useStyles } from '@/components/Layout/Layout.styles';

type OnSidebarToggle = (value: boolean) => () => void;

interface Props {
  chapters: ChapterEntry[];
  children: ReactNode[];
}

export const Layout: FunctionComponent<Props> = ({ chapters, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onSidebarToggle: OnSidebarToggle = (value) => () => {
    setIsSidebarOpen(value);
  };

  return (
    <>
      <Header isMobile={isMobile} onSidebarOpen={onSidebarToggle(true)} />
      <Sidebar
        chapters={chapters}
        isMobile={isMobile}
        isOpen={isSidebarOpen}
        onClose={onSidebarToggle(false)}
      />
      <div className={c(classes.container, { mobile: isMobile })}>
        <Container component={Box} py={3}>
          {children}
        </Container>
        <Footer />
      </div>
    </>
  );
};
