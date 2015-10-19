'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'javascript/reducers/index';

console.log('INDEX:', rootReducer);

const logger = createLogger({collapsed: true});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('javascript/reducers', () => {
      const nextRootReducer = require('javascript/reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
