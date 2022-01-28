import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cartIcon.css';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/cart/cartActions';
import { selectCartQuantity } from '../../redux/cart/cartSelectors';

const CartIcon = ({ toggleDropdown, itemQuantity}) => {
  return(
    <div className='icon-container cartIcon-container' onClick={toggleDropdown}>
      <ShoppingBag className='icon' />
        <span className='itemCount'>{ itemQuantity }</span>
    </div>
  )
} 

const mapStateToProps = createStructuredSelector ({
  itemQuantity: selectCartQuantity
});

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);