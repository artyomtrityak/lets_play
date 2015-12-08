'use strict';

import { EventEmitter } from 'events';
import { AppConstants } from 'javascript/constants/app.constants';
import { AppDispatcher } from 'javascript/dispatchers/app.dispatcher';


/**
* Application state and state processers
*/
let appState = {
  isUserMenuOpen: false
};

function showLoader () {
  appState = Object.assign({}, {loading: true});
}

function hideLoader () {
  appState = Object.assign({}, {loading: false});
}

let toggleUserMenu = () => {
  appState = Object.assign({}, appState, {isUserMenuOpen: !appState.isUserMenuOpen});
};


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

    case AppConstants.TOGGLE_USER_MENU:
      toggleUserMenu();
      AppStore.emitChange();
      break;

    default:
      // no op
  }
});
