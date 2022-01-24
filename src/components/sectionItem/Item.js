import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';

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
          <CustomButton productBtn onClick={() => addItem(item)}>Adicionar ao carrinho</CustomButton>
         <div onClick={() => addToWishList(item)} className='icon-container'>
            <HeartIcon className='icon' /> 
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
