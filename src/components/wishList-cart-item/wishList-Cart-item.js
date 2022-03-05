import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as AddToCartIcon } from '../../assets/cart-add.svg';
import { ReactComponent as RemoveFromWishlistIcon } from '../../assets/cross.svg';
import { addItemToCart } from '../../redux/cart/cartActions';
import { deleteFromWishList } from '../../redux/wishList/wishListAction';

import './wishList-Cart-item.css';

const SmallItem = ({
  cartItem, 
  item, 
  addItemToCart, 
  deleteFromWishList
  }) => {
  const {name, price, quantity, productImage} = item;
  return(
    <div className='item-container'>
      <div className='item'>
        <div className='img-container'>
          <img src={productImage} alt={name} />
        </div>
        <div className='item-info'>
          <p className='item-name'>{name}</p>
          <span className='item-price'>
            { cartItem && `${quantity} x ` } 
            {price}
          </span>
        </div>
      </div>
      { cartItem || 
        <div className='wishlist-icons'>
          <div 
            className='icon-container addCart' 
            onClick={() => addItemToCart(item)}>
              <AddToCartIcon className='icon'/>
          </div>
          <div 
            className='icon-container' 
            onClick={() => deleteFromWishList(item)}>
              <RemoveFromWishlistIcon className='icon' />
          </div>
        </div>
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  deleteFromWishList: item => dispatch(deleteFromWishList(item))
});
export default connect(null, mapDispatchToProps)(SmallItem);