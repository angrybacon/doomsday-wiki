import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

export default function Youtube({ id }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <iframe
        allowFullScreen
        allow={`
accelerometer;
autoplay;
clipboard-write;
encrypted-media;
gyroscope;
picture-in-picture;
`}
        className={classes.frame}
        src={`https://www.youtube.com/embed/${id}`}
      />
    </div>
  );
}

Youtube.propTypes = {
  id: PropTypes.string.isRequired,
};
