import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../cart-icon/cartSelector';

import './cartDropdown.css';
import SmallItem from '../wishList-cart-item/wishList-Cart-item';
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
      <CustomButton productBtn className='checkoutBtn'>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);