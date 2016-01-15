'use strict';

import { EventEmitter } from 'events';
import { AppConstants } from 'javascript/constants/app.constants';
import { AppDispatcher } from 'javascript/dispatchers/app.dispatcher';


/**
* Application state and state processers
*/
type AppStateType = {
  isUserMenuOpen: boolean;
  loading: boolean;
};

let appState = {
  isUserMenuOpen: false,
  loading: false
};


const showLoader = (state) : AppStateType => {
  return Object.assign({}, state, {loading: true});
};

const hideLoader = (state) : AppStateType => {
  return Object.assign({}, state, {loading: false});
};

const toggleUserMenu = (state) : AppStateType => {
  return Object.assign({}, state, {isUserMenuOpen: !state.isUserMenuOpen});
};


/**
* TODO: JSDOC
* 
*/
export const AppStore = Object.assign({}, EventEmitter.prototype, {
  getState: function() : AppStateType {
    return appState;
  },

  emitChange: function() : void {
    this.emit('change');
  }
});


/**
* Application events dispatchers
*/
type DispatcherAppActionsType = {
  actionType: string;
};

AppDispatcher.register((action : DispatcherAppActionsType) : void => {

  switch (action.actionType) {
    case AppConstants.INIT_APP_START:
      appState = showLoader(appState);
      AppStore.emitChange();
      break;

    case AppConstants.INIT_APP_END:
      appState = hideLoader(appState);
      AppStore.emitChange();
      break;

    case AppConstants.OPEN_SIGN_IN:
      appState = toggleUserMenu(appState);
      AppStore.emitChange();
      break;

    default:
      // no op
  }

});
