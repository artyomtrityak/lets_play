'use strict';

import { AppDispatcher } from 'javascript/dispatchers/app.dispatcher';
import { AppConstants } from 'javascript/constants/app.constants';


export let toggleUserMenu = () => {
  AppDispatcher.dispatch({
    actionType: AppConstants.TOGGLE_USER_MENU
  });
};


export let showSignIn = () => {
  AppDispatcher.dispatch({
    actionType: AppConstants.OPEN_SIGN_IN
  });
};


export let onCallForPlayers = () => {
  console.log('call for players');
};


export let onModalClose = () => {
  console.log('close modal');
};
