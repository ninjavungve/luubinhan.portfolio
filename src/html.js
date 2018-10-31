import React from "react";
import favi32 from "./images/favi32.png";
import favi128 from "./images/favi128.png";

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="vi" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#01A1B1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="format-detection" content="telephone=no" />
          <link
            rel="author"
            type="text/plain"
            href="https://luubinhan.github.io/blog/humans.txt"
          />
          <link rel="apple-touch-icon" href="https://luubinhan.github.io/blog/images/luckyluu_manifest_192.png" />

          <meta name="msapplication-TileImage" content="https://luubinhan.github.io/blog/images/luckyluu_manifest_192.png"/>
          <meta name="msapplication-TileColor" content="#01A1B1"/>

          <link rel="icon" sizes="32x32" href={favi32} type="image/png" />
          <link rel="icon" sizes="180x180" href={favi128} type="image/png" />
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="application-name" content="luckyluu portfolio"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
          <meta name="apple-mobile-web-app-title" content="luckyluu"/>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link href="https://fonts.googleapis.com/css?family=Chakra+Petch:400,700&amp;subset=vietnamese" rel="stylesheet" />
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
