'use strict';

import React from 'react';
import { Route } from 'react-router';
import { App, Home, Calendar } from 'javascript/containers';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="calendar" component={Calendar} />
  </Route>
);
