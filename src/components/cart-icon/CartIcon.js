import React from 'react';
import { connect } from 'react-redux';

import './cartIcon.css';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/cart/cartActions';

const CartIcon = ({ toggleDropdown, itemQuantity}) => {
  return(
    <div className='cartIcon' onClick={toggleDropdown}>
      <ShoppingBag className='shoppingBag' />
      <span className='itemCount'>{ itemQuantity }</span>
    </div>
  )
} 

const mapStateToProps = ({cart: {cartItems}}) => ({
  itemQuantity: cartItems.reduce((itemCount, item) => itemCount + item.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);