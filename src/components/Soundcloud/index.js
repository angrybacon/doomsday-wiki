import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

export default function Soundcloud({ url }) {
  const classes = useStyles();
  const parameters = Object.entries({
    auto_play: false,
    show_comments: true,
    url,
  }).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  return (
    <div className={classes.root}>
      <iframe
        allow="autoplay"
        className={classes.frame}
        scrolling="no"
        src={`https://w.soundcloud.com/player/?${parameters.join('&')}`}
      />
    </div>
  );
}

Soundcloud.propTypes = {
  url: PropTypes.string.isRequired,
};
