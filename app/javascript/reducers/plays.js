'use strict';

const initialState = {
  plays: [{
    title: 'Hello'
  }]
};

export function plays(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
