import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/user.svg';

import { connect } from 'react-redux';

import './item.css';
import CustomButton from '../customButton/CustomButton';
import { addItem } from '../../redux/cart/cartActions';
import { addToWishList } from '../../redux/wishList/wishListAction';

const Item = ({item, addItem, addToWishList}) => {
  const {name, price, productImage} = item;
  return(
    <div className='product-item'>
      <div style={{backgroundImage: `url(${productImage})`}}
            className='product-image' />
      <div className='product-info-container'>
        <div className='product-info'>
          <h3 className='product-name'>{name}</h3>
          <span className='product-price'>{price}</span>
        </div>
        <div className='item-buttons'>
          <CustomButton productBtn onClick={() => addItem(item)}>Adicionar</CustomButton>
          <div onClick={() => addToWishList(item)} className='wish-list'>
            <img className='heart-icon' src="/images/shop-img/hats/palm-tree-cap.png" alt="" />
          </div>
        </div>
      </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  addToWishList: item => dispatch(addToWishList(item))
})

export default connect(null, mapDispatchToProps)(Item);
