import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopProducts = createSelector(
  [selectShop],
  shop => shop.shopProducts
);
