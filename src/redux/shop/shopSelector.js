import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopProducts = createSelector(
  [selectShop],
  shop => Object.keys(shop.shopProducts).map(key => shop.shopProducts[key])
);


const selectCollection = (categoryUrl, shop) => {
  const collectionUrl = categoryUrl[0].toUpperCase() + categoryUrl.slice(1);

  return shop.shopProducts[collectionUrl];
} 

export const selectSectionProducts = urlParam => createSelector(
  [selectShop],
  shop => {
    return selectCollection(urlParam, shop);
  }
);

export const selectShopProduct = (categoryUrl, productUrl) => createSelector(
  [selectShop],
  shop => {

    const productName = productUrl.split('-').map((word, idx) => { 
      return idx === 0 ? word[0].toUpperCase() + word.slice(1) : word
    }).join(' ');

    return selectCollection(categoryUrl, shop).items.find(item => item.name === productName);
  }
);