import React from 'react';

import { ReactComponent as HeartIcon } from '../../assets/user.svg';

import { connect } from 'react-redux';

import './item.css';

import CustomButton from '../customButton/CustomButton';
import { addItem } from '../../redux/cart/cartActions';

const Item = ({item, addItem}) => {
  const {name, price, productImage} = item;
  return(
    <div className='products-item'>
      <div style={{backgroundImage: `url(${productImage})`}}
            className='product-image' />
      <div className='product-info-container'>
        <div className='product-info'>
          <h3 className='product-name'>{name}</h3>
          <span className='product-price'>{price}</span>
        </div>
        <div className='item-buttons'>
          <CustomButton onClick={() => addItem(item)} productBtn>Adicionar
          </CustomButton>
          <div className='wish-list'>
            <HeartIcon title='buy' className='heart-icon' />
          </div>
        </div>
<button onClick={() => addItem(item)} productBtn>Comprar</button>
      </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Item);
