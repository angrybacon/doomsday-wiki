import CircleSmallIcon from 'mdi-react/CircleSmallIcon';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '@material-ui/core/Box';


export default function Listify({ items, renderer, separator, ...rest }) {
  items = (items && (Array.isArray(items) ? items : [items]) || []).filter(it => it);
  return items.length ? (
    <Box display="flex" flexWrap="wrap" {...rest}>
      {items.map((it, index, array) => (
        <Box alignItems="center" display="flex" key={index}>
          {typeof renderer === 'function' ? renderer(it) : it}
          {index < array.length - 1 && separator}
        </Box>
      ))}
    </Box>
  ) : '';
}


Listify.defaultProps = {
  separator: <CircleSmallIcon size="1em" />,
};


Listify.propTypes = {
  items: PropTypes.array,
  renderer: PropTypes.func,
  separator: PropTypes.node,
};
