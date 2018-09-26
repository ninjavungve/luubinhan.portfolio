import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
  render() {
    return (
      <html lang='vi' {...this.props.htmlAttributes}>
        <head>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="format-detection" content="telephone=no" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
