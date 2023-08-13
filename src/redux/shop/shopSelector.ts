import { createSelector } from 'reselect';

const selectShop = (state: any) => state.shop;

export const selectShopProducts = createSelector(
  [selectShop],
  shop => Object.keys(shop.shopProducts).map(key => shop.shopProducts[key])
);


const selectCollection = (categoryUrl: any, shop: any) => {
  const collectionUrl = categoryUrl[0].toUpperCase() + categoryUrl.slice(1);

  return shop.shopProducts[collectionUrl];
} 

export const selectSectionProducts = (urlParam: any) => createSelector(
  [selectShop],
  shop => {
    return selectCollection(urlParam, shop);
  }
);

export const selectShopProduct = (categoryUrl: any, productUrl: any) => createSelector(
  [selectShop],
  shop => {

    const productName = productUrl.split('-').map((word: any, idx: any) => { 
      return idx === 0 ? word[0].toUpperCase() + word.slice(1) : word
    }).join(' ');

    return selectCollection(categoryUrl, shop).items.find((item: any) => item.name === productName);
  }
);