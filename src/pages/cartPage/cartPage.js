import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelectors';

import './cartPage.css';

const CartPage = ({cartItems}) => {
  return(
    <div className='checkout'>
      <div className='checkout-header'>
        <div className='producti'>
          <h4>Produto</h4>
        </div>
        <div className='productQuantity'>
          <h4>Quantidade</h4>
        </div>
        <div className='productPrice'>
          <h4>Preço</h4>
        </div>
        <div className='btn-romove'>
          <h4>Remover</h4>
        </div>
      </div>
      <div className='checkout-body'>
        {
          cartItems.map(({name, price, productImage, quantity, id }) => (
          <div className='carti'>
            <div className='producti'>
              <div>
                <img src={productImage} alt={name} />
              </div>
              <div className='productName'>
                <span>{name}</span>
              </div>
            </div>
           
            <div className='productQuantity'>
              <span className='arrow'>&#10094;</span>
              <span>{quantity}</span>
              <span className='arrow'>&#10095;</span>
            </div>
            <div className='productPrice'>
              <span>{price}</span>
            </div>
            <div className='btn-romove'>
              <span>&#10005;</span>
            </div>
          </div>

          ))
        }
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartPage);