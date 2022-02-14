import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as CartAdd } from '../../assets/cart-add.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import { addItemToCart } from '../../redux/cart/cartActions';
import { deleteFromWishList } from '../../redux/wishList/wishListAction';

import './wishList-Cart-item.css';

const SmallItem = ({cartItem, item, addItemToCart, deleteFromWishList}) => {
  const {name, productImage, itemQuantity, price} = item;
  console.table(item)
  return(
    <div className='wish'>
      <div className='cartItem'>
        <div className='img-container'>
          <img src={productImage} alt={name} />
        </div>
        <div className='itemI'>
          <p className='itemName'>{name}</p>
          <span className='itemPrice'>
            { cartItem && `${itemQuantity} x ` } 
            {price}
          </span>
        </div>
      </div>
      <div className='wishlist-icons'>
        <div className='icon-container' onClick={() => addItemToCart(item)}>
          <CartAdd className='icon'/>
        </div>
        <div className='icon-container' onClick={() => deleteFromWishList(item)}>
          <Cross className='icon' />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  deleteFromWishList: item => dispatch(deleteFromWishList(item))
});
export default connect(null, mapDispatchToProps)(SmallItem);