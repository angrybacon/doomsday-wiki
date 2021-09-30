import React from 'react';
import type { Components } from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './RemarkImage.styles';

export const RemarkImage: Components['img'] = ({ title, ...rest }) => {
  const classes = useStyles();
  if (!rest.src) return null;
  const description: string | undefined = title || rest.alt;
  return (
    <>
      <span className={classes.root}>
        {/* eslint-disable-next-line jsx-a11y/alt-text  */}
        <img className={classes.image} {...rest} title={description} />
      </span>
      {description && (
        <Typography
          className={classes.description}
          color="textSecondary"
          component="em"
          variant="caption"
        >
          {description}
        </Typography>
      )}
    </>
  );
};
