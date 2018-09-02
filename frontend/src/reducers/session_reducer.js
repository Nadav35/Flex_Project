import {
  RECEIVE_CURRENT_USER,
} from '../util/session_api_util';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        id: action.payload.id,
        name: action.payload.name,
        highScore: action.payload.highScore
      };
    default:
      return state;
  }
};

export default sessionReducer;