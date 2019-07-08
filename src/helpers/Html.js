import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import serialize from 'serialize-javascript';
import _ from 'lodash/fp';
import { toJS } from 'mobx';

function prepareStore(allStore) {
  const keyArr = Object.keys(allStore);
  const output = {};
  keyArr.forEach(key => {
    output[key] = toJS(allStore[key]);
  });
  return output;
}

const Html = ({ htmlContent, reqUrlObj, ...store }) => {
  // Should be declared after "renderToStaticMarkup()" of "../server.js" or it won't work
  const head = Helmet.renderStatic();
  const attrs = head.htmlAttributes.toComponent();
  const { lang, ...rest } = attrs || {};
  const assets = webpackIsomorphicTools.assets();
  const title = 'todo';
  return (
    <html {...rest} lang={lang || 'en'}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {head.title.toComponent()}
        {head.base.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}

        <link
          href="/vendors/css/font-awesome.css"
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
        />
        <link
          href="/vendors/css/antd.css"
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
        />
        <link
          href="/vendors/css/preload.css"
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
        />
        {/* Styles will be presented in production with webpack extract text plugin */}
        {_.keys(assets.styles).map(style => (
          <link
            key={_.uniqueId()}
            href={assets.styles[style]}
            media="screen, projection"
            rel="stylesheet"
            type="text/css"
          />
        ))}
        {/* Styles will be presented in development mode */}
        {/* I put all of the styles here to smoothen the flick */}
        {/* {_.keys(assets.styles).length === 0 ? (
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: require('../theme/normalize.css')._style
            }}
          />
        ) : null} */}
      </head>
      <body>
        <div
          id="react-view"
          style={{ height: '100%' }}
          // Rendering the route, which passed from server-side
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: htmlContent || '' }}
        />

        <script
          // Store the initial state into window
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              store &&
              `window.__INITIAL_STATE__=${JSON.stringify(prepareStore(store))};`
          }}
        />
        <script src="/vendors/js/polyfill.js" />
        <script key={_.uniqueId()} src={assets.javascript.manifest} />
        <script key={_.uniqueId()} src={assets.javascript.vendor} />
        <script id="mainJs" key={_.uniqueId()} src={assets.javascript.main} />
      </body>
    </html>
  );
};

Html.defaultProps = { htmlContent: '' };
Html.propTypes = {
  htmlContent: PropTypes.string
  // store: PropTypes.object // eslint-disable-line react/forbid-prop-types
};
export default Html;
