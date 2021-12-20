import React from 'react';

import './item.css';

const Item = ({items}) => {
  return(
    <div className='products-list'>
      {
        items.map(({id, name, price, productImage}) => (
          <div key={id} className='products-item'>
            <div 
              style={{backgroundImage: `url(${productImage})`}}
              className='product-image' />
            <div>
              <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <span className='product-price'>{price}</span>
              </div>
              <div className='item-buttons'>
                <span>Adicionar ao carrinho</span>
                <span>Adicionar à lista de desejos</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Item;
