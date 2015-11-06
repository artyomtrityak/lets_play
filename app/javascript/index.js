'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { Router, Redirect } from 'react-router';
import configureStore from './configure-store';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory({queryKey: false})}>
      <Redirect from="/" to="home" />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

