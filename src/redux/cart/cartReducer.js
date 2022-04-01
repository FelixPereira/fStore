import { cartActionTypes } from './cartActionTypes';
import { 
  addItemToCart, 
  deleteItemFromCart,
  decreaseItemQuantity
 } from './utilities';

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
      console.log(state.cartItems)
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case cartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state, 
        cartItems: decreaseItemQuantity(state.cartItems, action.payload)
      };

    case cartActionTypes.DELETE_FROM_CART:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload)
      };
    default :
      return state;
  }
}

export default cartReducer;