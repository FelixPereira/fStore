import React from 'react';
import { connect } from 'react-redux';

import './wishList.css';

import SmallItem from '../wishList-cart-item/wishList-Cart-item';

const WishList = ({wishListItems}) => {
  return(
    <div className='wishList'>
      <h2 className='wishList-title'>Lista de desejos</h2>
      <div className='wishListItems-container'>
        {
          wishListItems
          .filter((wishListItem, idx) => idx < 10)
          .map(wishListItem => (
            <SmallItem key={wishListItem.id} item={wishListItem}/>
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({wishList: {wishListItems}}) => ({
  wishListItems: wishListItems
});

export default connect(mapStateToProps)(WishList);