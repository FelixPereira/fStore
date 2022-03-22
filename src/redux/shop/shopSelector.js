import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopProducts = createSelector(
  [selectShop],
  shop => Object.keys(shop.shopProducts).map(key => shop.shopProducts[key])
);

export const selectSectionProducts = sectionUrl => createSelector(
  [selectShop],

  shop => {
    const collectionUrl = sectionUrl.split('').map((letter, idx) => {
      return idx === 0 ? letter.toUpperCase() : letter
    }).join('');

    return shop.shopProducts[collectionUrl];
  }
);

