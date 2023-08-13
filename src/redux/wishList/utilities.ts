export const addToWishList = (wishListItems: any, itemToAdd: any) => {
  const existingItem = wishListItems.find(
    (wishListItem: any) => wishListItem.id === itemToAdd.id
  );

  if (existingItem) {
    return wishListItems;
  } else {
    return [...wishListItems, itemToAdd];
  }
};

export const romoveFromWishList = (wishListItems: any, itemToRemove: any) => {
  return wishListItems.filter(
    (wishListItem: any) => wishListItem.id !== itemToRemove.id
  );
};
