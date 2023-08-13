import { actionTypes } from './wishListActionTypes';

export const addToWishList = (item: any) => ({
  type: actionTypes.ADD_TO_LIST,
  payload: item
});

export const deleteFromWishList = (item: any) => ({
  type: actionTypes.REMOVE_FROM_WISHLIST,
  payload: item
});