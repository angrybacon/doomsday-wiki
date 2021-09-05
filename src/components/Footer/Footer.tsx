import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from '@/components/Link/Link';
import { useStyles } from './Footer.styles';

export const Footer: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography color="textSecondary" variant="caption">
        Copyright &copy; 2017-2021 ddft.wiki contributors. Read the notice about{' '}
        <Link href="/license">licenses and resources</Link>.
      </Typography>
    </footer>
  );
};
