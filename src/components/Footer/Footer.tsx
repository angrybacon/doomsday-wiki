import c from 'classnames';
import React, { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@/components/Link/Link';
import { useStyles } from './Footer.styles';

interface Props {
  className?: string;
}

export const Footer: FunctionComponent<Props> = ({ className }) => {
  const classes = useStyles();
  return (
    <footer className={c(classes.root, className)}>
      <Typography color="textSecondary" variant="caption">
        Copyright &copy; 2017-2022 ddft.wiki contributors. Read the notice about{' '}
        <Link href="/license">licenses and resources</Link>.
      </Typography>
    </footer>
  );
};
