import { actionTypes } from './wishListActionTypes';
import { addToWishList, romoveFromWishList } from './utilities';

const INITIAL_STATE = {
  wishListItems: []
}

const wishListReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case actionTypes.ADD_TO_LIST:
      return {
        wishListItems: addToWishList(state.wishListItems, action.payload)
      };
    
    case actionTypes.REMOVE_FROM_WISHLIST:
      return {
        wishListItems: romoveFromWishList(state.wishListItems, action.payload)
      }
    
    default:
      return state
  }
}

export default wishListReducer;