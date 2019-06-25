import PropTypes from 'prop-types';
import React from 'react';


export default class Html extends React.PureComponent {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta content="ie=edge" httpEquiv="x-ua-compatible" />
          <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div dangerouslySetInnerHTML={{ __html: this.props.body }} id="___gatsby" key="body" />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}


Html.propTypes = {
  body: PropTypes.string,
  bodyAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  htmlAttributes: PropTypes.object,
  postBodyComponents: PropTypes.array,
  preBodyComponents: PropTypes.array,
};
