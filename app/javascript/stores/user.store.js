'use strict';

import { EventEmitter } from 'events';
import { AppConstants } from 'javascript/constants/app.constants';
import { AppDispatcher } from 'javascript/dispatchers/app.dispatcher';


/**
* User state and state processers
*/
let userState = {
};


/**
* TODO: JSDOC
*/
export const UserStore = Object.assign({}, EventEmitter.prototype, {
  getState: function () {
    return userState;
  },

  emitChange: function() {
    this.emit('change');
  }
});


/**
* User events dispatchers
*/
AppDispatcher.register( function (action) {
  
  switch (action.actionType) {

    default:
      // no op
  }
});
