import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartQuantity = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (counter, cartItem) => counter + cartItem.quantity, 0)
);

export const selectTotal = createSelector(
  [selectCartItems],
  cartItems =>  cartItems.reduce(
    (counter, cartItem) =>  counter + cartItem.price * cartItem.quantity, 0)
);

export const selectPriceTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.map(cartItem => cartItem.price2 = cartItem.quantity * cartItem.price)
);

export const selectDisplay = createSelector(
  [selectCart],
  cart => cart.display
);