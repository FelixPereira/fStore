import { actionTypes } from './wishListActionTypes';

export const addToWishList = item => ({
  type: actionTypes.ADD_TO_LIST,
  payload: item
});

export const deleteFromWishList = item => ({
  type: actionTypes.REMOVE_FROM_WISHLIST,
  payload: item
});