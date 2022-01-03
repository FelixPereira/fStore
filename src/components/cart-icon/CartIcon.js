import React from 'react';
import { connect } from 'react-redux';

import './cartIcon.css';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/cart/cartActions';

const CartIcon = ({ toggleDropdown }) => {
  return(
    <div className='cartIcon' onClick={toggleDropdown}>
      <ShoppingBag className='shoppingBag' />
      <span className='itemCount'>0</span>
    </div>
  )
} 

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);