'use strict';

import { EventEmitter } from 'events';
import { AppConstants } from 'javascript/constants/app.constants';
import { AppDispatcher } from 'javascript/dispatchers/app.dispatcher';


/**
* Application state and state processers
*/
let userState = {
};


/**
* User store
* EXPORT: true
*/
export let UserStore = Object.assign({}, EventEmitter.prototype, {
  getState: function() {
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
