import path from 'path';
import logger from 'morgan';
import express from 'express';
import compression from 'compression';
import hpp from 'hpp';
import { RouterStore } from 'mobx-react-router';
import url from 'url';
import os from 'os';
import React from 'react';
import Loadable from 'react-loadable';
import axios from 'axios';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider, useStaticRendering } from 'mobx-react';
import { StaticRouter } from 'react-router';
import { parseUrl } from 'query-string';
import Html from './helpers/Html';
import { port, host } from './config';
import { serverCreateStore } from './stores';
import App from './containers/app';

const renderHtml = (store, reqUrlObj, htmlContent) => {
  const html = renderToStaticMarkup(
    <Html {...store} reqUrlObj={reqUrlObj} htmlContent={htmlContent} />
  );

  return `${'<!doctype html>\n' +
    '<!-- Polyfills -->\n' +
    '<!--[if lt IE 10]>\n' +
    '<script src="https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js"></script>\n' +
    '<script src="https://raw.githubusercontent.com/inexorabletash/polyfill/master/typedarray.js"></script>\n' +
    '<![endif]-->\n' +
    '<!--[if lte IE 11]>\n' +
    '<script src="https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js"></script>\n' +
    '<![endif]-->\n'}${html}`;
};
// 默认服务端渲染函数
const defaultSend = (req, res, reqPathName, store) => {
  const routingStore = new RouterStore();
  const reqUrlObj = {
    pathname: reqPathName,
    query: parseUrl(req.url).query
  };
  routingStore.location = reqUrlObj;
  store.routing = routingStore;
  const context = {};
  const componentHTML = (
    <Provider {...store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  res.status(200);
  global.navigator = { userAgent: req.headers['user-agent'] };
  res.send(renderHtml(store, reqUrlObj, renderToString(componentHTML)));
};

useStaticRendering(true);
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Using helmet to secure Express with various HTTP headers

// app.use(helmet());

// Prevent HTTP parameter pollution.
app.use(hpp());
// Compress all requests
// 扩大express的大小
app.use(express.json({limit: '300mb'}));
app.use(compression());
app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Use morgan for http request debug (only show error)
app.use(logger('dev'));
// app.use(favicon(path.join(process.cwd(), './public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), './public')));

// Run express as webpack dev server
if (__DEV__) {
  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');
  // 根据mac地址判断webpack是否需要启用poll模式监听文件修改（解决某些文件系统普通watch模式无效）
  const netInfo = os.networkInterfaces();
  const macAddr = netInfo.eth0 && netInfo.eth0[0] && netInfo.eth0[0].mac;
  const enableWatchOptionMacAddr = ['f0:79:59:71:4d:64', '34:97:f6:35:b8:0b', '30:5a:3a:0e:36:2f', '14:dd:a9:7f:4d:0c'];
  const serverOptions = {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    noInfo: true,
    stats: 'minimal',
    serverSideRender: true
  };
  if (macAddr && enableWatchOptionMacAddr.includes(macAddr)) {
    serverOptions.watchOptions = {
      aggregateTimeout: 1000,
      poll: true
    };
  }
  const compiler = webpack(webpackConfig);
  app.use(
    require('webpack-dev-middleware')(compiler, serverOptions)
  );

  app.use(require('webpack-hot-middleware')(compiler));
}

// Register server-side rendering middleware
app.get('*', (req, res) => {
  if (__DEV__) webpackIsomorphicTools.refresh();
  // 过滤xss
  if (req.url.includes('<script>') || req.url.includes('</script>') || req.url.includes('%3Cscript%3E') || req.url.includes('%3C/script%3E')) {
    res.redirect('/');
  } else {
    global.console.log('路由match', req.url);
    const instance = axios.create();
    instance.defaults.headers.common['Content-Type'] = 'application/json';
    const reqPathName = url.parse(req.url).pathname;

    const mainStore = serverCreateStore();
    defaultSend(req, res, reqPathName, mainStore);
  }
});

if (port) {
  // 服务端异步加载组件，参考https://github.com/thejameskyle/react-loadable#loadablepreloadall
  Loadable.preloadAll().then(() => {
    app.listen(port, err => {
      const openUrl = `http://${host}:${port}`;

      if (err) global.console.error(`==> 😭  OMG!!! ${err}`);

      global.console.info(`==> 🌎  Listening at ${openUrl}`);

      // Open Chrome
      // require('../tools/openBrowser')(openUrl);
    });
  });
} else {
  global.console.error(
    '==> 😭  OMG!!! No PORT environment variable has been specified'
  );
}
