'use strict';

import { BaseStore } from './base.store';
import { AppConstants } from 'javascript/constants/app.constants';
import { AppDispatcher } from 'javascript/dispatchers/app.dispatcher';


/**
* Application state and state processers
*/
let appState = {
  isUserMenuOpen: false
};

/**
* Application store
* EXPORT: true
*/

export let AppStore = BaseStore(appState, {
  showLoader () {
    this.set({loader: true});
  },

  hideLoader () {
    this.set({loader: false});
  },

  toggleUserMenu () {
    this.set({isUserMenuOpen: !appState.isUserMenuOpen});
  }
});


/**
* Application events dispatchers
*/
AppDispatcher.register( function (action) {

  switch (action.actionType) {

    case AppConstants.INIT_APP_START:
      AppStore.showLoader();
      break;

    case AppConstants.INIT_APP_END:
      AppStore.hideLoader();
      break;

    case AppConstants.TOGGLE_USER_MENU:
      AppStore.toggleUserMenu();
      break;

    default:
      // no op
  }
});
