'use strict';

import { EventEmitter } from 'events';
import _ from 'lodash';

export let BaseStore = function(state, proto) {
  return Object.assign({}, EventEmitter.prototype, {

    emitChange () {
      this.emit('change');
    },

    getState () {
      return state;
    },

    set (setData = {}) {
      state = Object.assign({}, state, setData);
      this.emitChange();
    },

    changeCollection (name, criteria, setData) {
      let newState = {};
      newState[name] = Object.assign([], _.each(_.where(state[name], criteria), (item) => {
        Object.assign(item, setData);
      }), state[name]);
      this.set(newState);
    },

    setCollection(name, data) {
      let setData = {};
      setData[name] = this.merge(state[name], data);
      this.set(setData);
    },

    merge(collection, newCollection) {
      return _.map(newCollection, (item) => {
        let match = _.findWhere(collection, {id: item.id}) || {};
        if (match.id === item.id) {
          return Object.assign({}, match, item);
        } else {
          return item;
        }
      });
    }
  }, proto);
};
