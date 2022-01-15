import React from 'react';
import { connect } from 'react-redux';

import './cartDropdown.css';
import CartItem from '../cartItem/cartItem';

const CartDropdown = ({cartItems}) => {
  return(
    <div className='cartDropdown'>
    {
      cartItems.map(({name, price, quantity, productImage, id}) => (
        <CartItem key={id} itemName={name} itemPrice={price} itemQuantity={quantity} itemImg={productImage} />
      ))
    }
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems: cartItems
});

export default connect(mapStateToProps)(CartDropdown);