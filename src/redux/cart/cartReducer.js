import { cartActionTypes } from './cartActionTypes';

const INITIAL_STATE = {
  display: false,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        display: !state.display
      }
    default :
      return state;
  }
}

export default cartReducer;