/*
 *  Most simpliest redux store made for starter kit.
 *  Feel free to replace it with an own store implementation.
 */
import {createStore} from 'redux';

export class ACTIONS {
  static INCREMENT_COUNTER() {
    return {
      type : 'INCREMENT_COUNTER',
      payload : null
    };
  }

  static DECREMENT_COUNTER() {
    return {
      type : 'DECREMENT_COUNTER',
      payload: null
    };
  }
}

const rootReducer = function(state = {}, action) {
  if (action.type === 'INCREMENT_COUNTER') {
    return {counter : Number(state.counter) + 1};
  }

  if (action.type === 'DECREMENT_COUNTER') {
    return {counter : Number(state.counter) - 1};
  }

  return state;
};

export default (initialState) => {
  const store = createStore(rootReducer, initialState);

  return store;
};
