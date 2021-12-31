import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/user.svg';

import './item.css';

import CustomButton from '../customButton/CustomButton';

const Item = ({items}) => {
  return(
    <>
      {
        items.map(({id, name, price, productImage}) => (
          <div key={id} className='products-item'>
            <div 
              style={{backgroundImage: `url(${productImage})`}}
              className='product-image' />
            <div className='product-info-container'>
              <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <span className='product-price'>{price}</span>
              </div>
              <div className='item-buttons'>
                <CustomButton productBtn>Comprar</CustomButton>
                <div className='wish-list'>
                  <HeartIcon title='buy' className='heart-icon' />
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Item;
