import React, { FunctionComponent } from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import type { Banner as BannerModel } from '@/tools/markdown/types';
import { useStyles } from './Banner.styles';

export interface Props {
  banner: BannerModel;
  title: string;
}

export const Banner: FunctionComponent<Props> = ({ banner, title }) => {
  const classes = useStyles();
  return (
    <>
      <div
        aria-level={1}
        className={classes.root}
        role="heading"
        title={banner.title}
      >
        <div
          className={classes.background}
          style={{ backgroundImage: `url(${banner.art})` }}
        />
        <Typography className={classes.title} variant="h1">
          {title}
        </Typography>
      </div>
      <Divider />
    </>
  );
};
