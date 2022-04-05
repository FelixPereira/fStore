import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as ViewProduct } from '../../assets/eye.svg';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartActions';
import { addToWishList } from '../../redux/wishList/wishListAction';

import './item.css';

import CustomButton from '../customButton/CustomButton';
import IconContainer from '../icon/Icon';


const Item = ({item, categoryUrl, addItemToCart, addToWishList, productPath}) => {
  const {name, price, productImage} = item;
  const productUrl = name.split(' ').join('-').toLowerCase();

  return(
    <div className='product-item'>
      <div 
        style={{backgroundImage: `url(${productImage})`}}
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
        <IconContainer onClick={() => addToWishList(item)}>
          <HeartIcon 
            title='Adicionar à lista de desejos'
             />
        </IconContainer>

        <Link to={`${categoryUrl}/${productUrl}`}> 
          <IconContainer>
            <ViewProduct 
              className='icon'
              title='Ver os detalhes' />
          </IconContainer>
        </Link>
      </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  addToWishList: item => dispatch(addToWishList(item))
})

export default connect(null, mapDispatchToProps)(Item);