import React from 'react';
import './cartItem.css';

const CartItem = ({itemName, itemImg, itemQuantity, itemPrice}) => {
  return(
      <div className='cartItem'>
        <div className='img-container'>
          <img src={itemImg} alt={itemName} />
        </div>
        <div className='itemI'>
          <p className='itemName'>{itemName}</p>
          <span className='itemPrice'>{itemQuantity} x {itemPrice}</span>
        </div>
      </div>
    )
}

export default CartItem;