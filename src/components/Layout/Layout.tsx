import c from 'classnames';
import React, {
  ElementType,
  FunctionComponent,
  Fragment,
  HTMLAttributes,
  ReactChild,
  useState,
} from 'react';
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

type OnSidebarToggle = (value: boolean) => () => void;

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
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onSidebarToggle: OnSidebarToggle = (value) => () => {
    setIsSidebarOpen(value);
  };

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
          <Wrapper {...wrapperProps}>{children}</Wrapper>
        </Container>
        <Footer />
      </div>
    </>
  );
};
