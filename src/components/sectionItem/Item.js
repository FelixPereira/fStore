import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as ViewProduct } from '../../assets/eye.svg';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartActions';
import { addToWishList } from '../../redux/wishList/wishListAction';

import './item.css';

import CustomButton from '../customButton/CustomButton';


const Item = ({item, addItemToCart, addToWishList}) => {
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
          <CustomButton 
            productBtn 
            onClick={() => addItemToCart(item)}> Adicionar ao carrinho</CustomButton>
        </div>
      </div>
      <div className='icons-container'>
        <HeartIcon 
          className='icon wishlist' 
          title='Adicionar à lista de desejos'
          onClick={() => addToWishList(item)} />
          <span className='tooltip tooltip-wishlist'>Adicionar aos favoritos</span>
        <Link to='felix'>
          <ViewProduct 
            className='icon view-product' 
            title='Ver os detalhes'/>
            <span className='tooltip tooltip-view'>Ver os detalhes</span> 
        </Link>
      </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  addToWishList: item => dispatch(addToWishList(item))
})

export default connect(null, mapDispatchToProps)(Item);
