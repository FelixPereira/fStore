import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as ViewProduct } from '../../assets/eye.svg';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartActions';
import { addToWishList } from '../../redux/wishList/wishListAction';
import CustomButton from '../customButton/CustomButton';

import './item.css';

const Item = ({
  item, 
  addItemToCart, 
  addToWishList}) => {
  const {name, price, productImage} = item;
  return(
    <div className='product-item'>
      <div style={{backgroundImage: `url(${productImage})`}}
            className='product-image' />
      <div className='product-info-container'>
        <div className='product-info'>
          <h3 className='product-name'>{name}</h3>
          <span className='product-price'>{price} Kz</span>
        </div>
        <div className='cartToCart-btn'>
          <CustomButton productBtn onClick={() => addItemToCart(item)}>Adicionar ao carrinho</CustomButton>
        </div>
      </div>
      <div className='icons-container'>
        <HeartIcon className='icon wishlist' onClick={() => addToWishList(item)} />
          <span className='tooltip tooltip-wishlist'>Adicionar aos favoritos</span>
        <ViewProduct className='icon view-product' onClick={() => addToWishList(item)}/>
          <span className='tooltip tooltip-view'>Ver os detalhes</span> 
      </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  addToWishList: item => dispatch(addToWishList(item))
})

export default connect(null, mapDispatchToProps)(Item);
