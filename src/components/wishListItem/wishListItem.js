import React from 'react';
import './wishListItem.css';

const WishListItem = ({itemName, itemImg, itemPrice}) => {
  return(
      <div className='cartItem'>
        <div className='img-container'>
          <img src={itemImg} alt={itemName} />
        </div>
        <div className='itemI'>
          <p className='itemName'>{itemName}</p>
          <span className='itemPrice'>{itemPrice}</span>
        </div>
      </div>
    )
}

export default WishListItem;