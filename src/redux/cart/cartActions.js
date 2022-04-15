import { cartActionTypes } from "./cartActionTypes";

export const toggleDropdown = () => ({
  type: cartActionTypes.TOGGLE_DROPDOWN
});

export const addItemToCart = (item, amount) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
  quantity: amount
});

export const deleteItemFromCart = item => ({
  type: cartActionTypes.DELETE_FROM_CART,
  payload: item
});

export const decreaseItemQuantity = item => ({
  type: cartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item
});