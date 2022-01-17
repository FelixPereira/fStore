import React from 'react';
import { connect } from 'react-redux';

import './wishList.css';

import SmallItem from '../cartItem/cartItem';

const WishList = ({wishListItems}) => {
  return(
    <div className='wishListItems'>
      {
        wishListItems.map(({name, id, price, productImage}) => (
          <SmallItem key={id} itemName={name} itemPrice={price} itemImg={productImage}/>
        ))
      }
    </div>
  )
}

export const mapStateToProps = ({wishList: {wishListItems}}) => ({
  wishListItems: wishListItems
});

export default connect(mapStateToProps)(WishList);