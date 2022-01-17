import React from 'react';
import { connect } from 'react-redux';

import './cartDropdown.css';
import SmallItem from '../cartItem/cartItem';
import CustomButton from '../customButton/CustomButton';

const CartDropdown = ({cartItems}) => {
  return(
    <div className='cartDropdown'>
      <div className='cartItems-container'>
        {
          cartItems.map(({name, price, quantity, productImage, id}) => (
            <SmallItem cartItem key={id} itemName={name} itemPrice={price} itemQuantity={quantity} itemImg={productImage} />
          ))
        }
      </div>
      <CustomButton className='checkoutBtn'>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems: cartItems
});

export default connect(mapStateToProps)(CartDropdown);