import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartQuantity = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((itemCount, item) => itemCount + item.quantity, 0)
);