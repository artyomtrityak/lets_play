'use strict';

import { combineReducers } from 'redux';

import { plays } from './plays';

const rootReducer = combineReducers({
  plays
});

export default rootReducer;
