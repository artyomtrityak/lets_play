'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createHashHistory';
import { Router, Redirect } from 'react-router';
import routes from './routes';


ReactDOM.render(
  <Router history={createHistory({queryKey: false})}>
    {routes}
  </Router>,
  document.getElementById('root')
);
