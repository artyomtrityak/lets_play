'use strict';

import { AppDispatcher } from 'javascript/dispatchers/app.dispatcher';
import { AppConstants } from 'javascript/constants/app.constants';


export let toggleUserMenu = () => {
  AppDispatcher.dispatch({
    actionType: AppConstants.TOGGLE_USER_MENU
  });
};


export let showSignIn = () => {
  console.log('signin');
};


export let onCallForPlayers = () => {
  console.log('call for players');
};
