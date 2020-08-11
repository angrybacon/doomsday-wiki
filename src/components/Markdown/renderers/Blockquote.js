import PropTypes from 'prop-types';
import React from 'react';
import Quote from '../../Quote';

export default function Blockquote({ children }) {
  return <Quote children={children} />;
}

Blockquote.propTypes = {
  children: PropTypes.node,
};
