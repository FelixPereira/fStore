export const addToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if(existingItem) {
    return cartItems.map(cartItem => cartItem.id === itemToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem);
  } else {
      return [...cartItems, {...itemToAdd, quantity: 1}]
  }
};

export const deleteFromCart = (cartItems, itemToDelete) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToDelete.id );

  if(existingItem) {
    return cartItems.filter(cartItem => cartItem.id !== itemToDelete.id);
  } else {
    return cartItems;
  }
};