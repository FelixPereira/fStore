import React from 'react';

import './cartIcon.css';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  return(
    <div className='cartIcon'>
      <ShoppingBag className='shoppingBag' />
      <span className='itemCount'>0</span>
    </div>
  )
} 

export default CartIcon;