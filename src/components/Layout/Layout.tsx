import React, { FunctionComponent, ReactNode } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Meta } from '@/components/Meta/Meta';

const useStyles = makeStyles((theme: Theme) => ({
  offset: theme.mixins.toolbar,
}));

interface Props {
  children: ReactNode[];
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Meta />
      <CssBaseline />
      <Header />
      {/* NOTE Enforce a vertical offset to account for the fixed header */}
      <div className={classes.offset} />
      <Container component={Box} py={3}>
        {children}
      </Container>
      <Footer />
    </>
  );
};
