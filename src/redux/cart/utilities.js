export const addToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if(existingItem) {
    return (
      cartItems.map(cartItem => cartItem.id === itemToAdd.id 
        ? {...itemToAdd, quantity: itemToAdd.quantity++}
        : cartItem)
    )
  } else {
      return (
        [...cartItems, {...itemToAdd, quantity: 1}]
      )
  }
}