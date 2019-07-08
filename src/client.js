import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import Loadable from 'react-loadable';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import browserHistory from 'helpers/history';
import App from './containers/app';
import { clientCreateStore } from './stores';



useStrict(true);

// Get initial state from server-side rendering
const store = clientCreateStore();

const userAgent = window.navigator.userAgent;
store.resumeCommonStore.isIE = userAgent.includes('MSIE') || userAgent.includes('Trident');
store.basicStore.isIE = userAgent.includes('MSIE') || userAgent.includes('Trident');
store.workStore.isIE = userAgent.includes('MSIE') || userAgent.includes('Trident');
store.skillsStore.isIE = userAgent.includes('MSIE') || userAgent.includes('Trident');
store.assessmentStore.isIE = userAgent.includes('MSIE') || userAgent.includes('Trident');
store.chooseColorStore.isIE = userAgent.includes('MSIE') || userAgent.includes('Trident');
store.menuStore.isIE = userAgent.includes('MSIE') || userAgent.includes('Trident');
const mountNode = document.getElementById('react-view');

const renderApp = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider {...store}>
        <Router history={browserHistory}>
          <LocaleProvider locale={zhCN}>
            <App />
          </LocaleProvider>
        </Router>
      </Provider>,
      mountNode
    );
  });
};
renderApp();


