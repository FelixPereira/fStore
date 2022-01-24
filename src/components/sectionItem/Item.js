import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as ViewProduct } from '../../assets/view.svg';

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
        <div className='cartToCart-btn'>
          <CustomButton productBtn onClick={() => addItem(item)}>Adicionar ao carrinho</CustomButton>
        </div>
      </div>
      <div className='icons'>
        <HeartIcon title='Adicionar à lista de desejos' className='icon' onClick={() => addToWishList(item)}/> 
        <ViewProduct className='icon' onClick={() => addToWishList(item)}/> 
      </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  addToWishList: item => dispatch(addToWishList(item))
})

export default connect(null, mapDispatchToProps)(Item);
