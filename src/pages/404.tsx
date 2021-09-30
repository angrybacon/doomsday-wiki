import { NextPage } from 'next';
import React from 'react';
import Box from '@material-ui/core/Box';
import {
  Theme,
  alpha,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { Layout } from '@/components/Layout/Layout';
import type { ExtraPageProps } from '@/interfaces/page.model';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: 'url(/404.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      '&:before': {
        backdropFilter: 'blur(4px)',
        backgroundColor: alpha(theme.palette.common.black, 0.3),
        bottom: 0,
        content: '""',
        display: 'block',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
      },
    },
  })
);

const NotFoundPage: NextPage<ExtraPageProps> = ({ menu }) => {
  const classes = useStyles();
  return (
    <Layout className={classes.root} menu={menu} title="404">
      <Box fontSize="8em" fontWeight="fontWeightLight" textAlign="center">
        404
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
