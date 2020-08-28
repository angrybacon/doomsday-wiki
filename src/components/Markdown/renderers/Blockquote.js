import React from 'react';
import PropTypes from 'prop-types';
import Quote from '../../Quote';

export default function Blockquote({ children }) {
  return <Quote>{children}</Quote>;
}

Blockquote.propTypes = {
  children: PropTypes.node,
};
