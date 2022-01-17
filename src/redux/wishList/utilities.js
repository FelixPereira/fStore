export const addToWishList = (wishListItems, itemToAdd) => {
  const existingItem = wishListItems.find(wishListItem => wishListItem.id === itemToAdd.id);
  
  if(existingItem) {
    return wishListItems;
  } else {
    return [...wishListItems, itemToAdd]
  }
}