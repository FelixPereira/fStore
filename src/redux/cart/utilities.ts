export const addItemToCart = (cartItems: any, itemToAdd: any, amount: any) => {
  const existingItem = cartItems.find((cartItem: any) => cartItem.id === itemToAdd.id);

  if(existingItem) {
    return cartItems.map((cartItem: any) => cartItem.id === itemToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + amount}
      : cartItem);
  } else {
      return [...cartItems, {...itemToAdd, quantity: amount}]
  }
};

export const deleteItemFromCart = (cartItems: any, itemToDelete: any) => { 
  return cartItems.filter((cartItem: any) => cartItem.id !== itemToDelete.id);
};

export const decreaseItemQuantity = (cartItems: any, itemToDecrease: any) => {
  const existingItem = cartItems.find((cartItem: any) => cartItem.id === itemToDecrease.id);

  if(existingItem.quantity === 1) { 
    return cartItems.filter((cartItem: any) => cartItem.id !== itemToDecrease.id);
  } else {
    return cartItems.map((cartItem: any) => cartItem.id === itemToDecrease.id 
      ? {...cartItem, quantity: cartItem.quantity - 1} 
      : cartItem);
  }
};