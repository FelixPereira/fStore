export const addItemToCart = (cartItems, itemToAdd, amount) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if(existingItem) {
    return cartItems.map(cartItem => cartItem.id === itemToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + amount}
      : cartItem);
  } else {
      return [...cartItems, {...itemToAdd, quantity: amount}]
  }
};

export const deleteItemFromCart = (cartItems, itemToDelete) => { 
  return cartItems.filter(cartItem => cartItem.id !== itemToDelete.id);
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToDecrease.id);

  if(existingItem.quantity === 1) { 
    return cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id);
  } else {
    return cartItems.map(cartItem => cartItem.id === itemToDecrease.id 
      ? {...cartItem, quantity: cartItem.quantity - 1} 
      : cartItem);
  }
};