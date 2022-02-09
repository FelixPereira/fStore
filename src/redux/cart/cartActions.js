import { cartActionTypes } from "./cartActionTypes";

export const toggleDropdown = () => ({
  type: cartActionTypes.TOGGLE_DROPDOWN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const deleteFromCart = item => ({
  type: cartActionTypes.DELETE_FROM_CART,
  payload: item
});