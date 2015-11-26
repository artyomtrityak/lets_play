'use strict';

import { AppDispatcher } from 'javascript/dispatchers/app.dispatcher';
import { AppConstants } from 'javascript/constants/app.constants';

export function test () {
  AppDispatcher.dispatch({
    actionType: AppConstants.TEST
  });
}
