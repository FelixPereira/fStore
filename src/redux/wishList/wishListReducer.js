import { actionTypes } from './wishListActionTypes';
import { addToWishList } from './utilities';

const INITIAL_STATE = {
  wishListItems: []
}

const wishListReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_LIST:
      return {
        wishListItems: addToWishList(state.wishListItems, action.payload)
      }
    
    default:
      return state
  }
}

export default wishListReducer;