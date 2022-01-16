import React from 'react';
import { connect } from 'react-redux';

const WishList = ({wishListItems}) => {
  return(
    <div>
      {
        wishListItems.map(wishListItem => (
          <div> { wishListItem.name }</div>
        ))
      }
    </div>
  )
}

export const mapStateToProps = ({wishList: {wishListItems}}) => ({
  wishListItems: wishListItems
});

export default connect(mapStateToProps)(WishList);