'use strict';

import { EventEmitter } from 'events';
import { AppConstants } from 'javascript/constants/app.constants';
import { AppDispatcher } from 'javascript/dispatchers/app.dispatcher';


/**
* Application state and state processers
*/
let appState = {};

function showLoader () {
  appState = Object.assign({}, {loading: true});
}

function hideLoader () {
  appState = Object.assign({}, {loading: false});
}


/**
* Application store
* EXPORT: true
*/
export let AppStore = Object.assign({}, EventEmitter.prototype, {
  getState: function() {
    return appState;
  },

  emitChange: function() {
    this.emit('change');
  }
});


/**
* Application events dispatchers
*/
AppDispatcher.register( function (action) {
  switch (action.actionType) {
    
    case AppConstants.INIT_APP_START:
      showLoader();
      AppStore.emitChange();
      break;

    case AppConstants.INIT_APP_END:
      hideLoader();
      AppStore.emitChange();
      break;

    //TMP
    case AppConstants.TEST:
      showLoader();
      AppStore.emitChange();
      break;

    default:
      // no op
  }
});
