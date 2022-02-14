export const addToWishList = (wishListItems, itemToAdd) => {
  const existingItem = wishListItems.find(wishListItem => wishListItem.id === itemToAdd.id);
  
  if(existingItem) {
    return wishListItems;
  } else {
    return [...wishListItems, itemToAdd];
  }
};

export const romoveFromWishList = (wishListItems, itemToRemove) => {
  return wishListItems.filter(wishListItem => wishListItem.id !== itemToRemove.id)
};