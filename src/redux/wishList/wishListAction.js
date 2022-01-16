import { actionTypes } from './wishListActionTypes';

export const addToWishList = item => ({
  type: actionTypes.ADD_TO_LIST,
  payload: item
});