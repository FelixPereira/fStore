import React from 'react';
import './wishList-Cart-item.css';

const SmallItem = ({itemName, itemImg, itemQuantity, itemPrice, cartItem}) => {
  return(
      <div className='cartItem'>
        <div className='img-container'>
          <img src={itemImg} alt={itemName} />
        </div>
        <div className='itemI'>
          <p className='itemName'>{itemName}</p>
          <span className='itemPrice'>
          {
            cartItem
              ? `${itemQuantity} x ` 
              : ''
          }
          {itemPrice}</span>
        </div>
      </div>
    )
}

export default SmallItem;