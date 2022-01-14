import { cartActionTypes } from './cartActionTypes';
import { addToCart } from './utilities';

const INITIAL_STATE = {
  display: false,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        display: !state.display
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload)
      };
    default :
      return state;
  }
}

export default cartReducer;