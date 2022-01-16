import { actionTypes } from './wishListActionTypes';

const INITIAL_STATE = {
  wishListItems: []
}

const wishListReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_LIST:
      return {
        wishListItems: [...state.wishListItems, action.payload]
      }
    
    default:
    return state
  }
}

export default wishListReducer;