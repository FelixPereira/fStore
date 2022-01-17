import React from 'react';
import { connect } from 'react-redux';

import WishListItem from '../wishListItem/wishListItem';
const WishList = ({wishListItems}) => {
  return(
    <div>
      {
        wishListItems.map(({name, id, price, productImage}) => (
          <WishListItem key={id} itemName={name} itemPrice={price} itemImg={productImage}/>
        ))
      }
    </div>
  )
}

export const mapStateToProps = ({wishList: {wishListItems}}) => ({
  wishListItems: wishListItems
});

export default connect(mapStateToProps)(WishList);