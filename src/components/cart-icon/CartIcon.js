import React from 'react';
import { connect } from 'react-redux';

import './cartIcon.css';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/cart/cartActions';
import { selectCartQuantity } from './cartSelector';

const CartIcon = ({ toggleDropdown, itemQuantity}) => {
  return(
    <div className='cartIcon' onClick={toggleDropdown}>
      <ShoppingBag className='shoppingBag' />
      <span className='itemCount'>{ itemQuantity }</span>
    </div>
  )
} 

const mapStateToProps = state => ({
  itemQuantity: selectCartQuantity(state)
});

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);