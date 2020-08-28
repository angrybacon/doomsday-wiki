import React from 'react';
import PropTypes from 'prop-types';

export default function Html({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" dangerouslySetInnerHTML={{ __html: body }} id="___gatsby" />
        {postBodyComponents}
      </body>
    </html>
  );
}

Html.propTypes = {
  body: PropTypes.string,
  bodyAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  htmlAttributes: PropTypes.object,
  postBodyComponents: PropTypes.array,
  preBodyComponents: PropTypes.array,
};
