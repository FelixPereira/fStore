import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { addItem, deleteFromCart } from '../../redux/cart/cartActions';

import './cartPage.css';

const CartPage = ({cartItems, addItem, deleteFromCart}) => {
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

        </div>
      </div>
      <div className='checkout-body'>
        {
          cartItems.map(cartItem => {
            const {name, price, productImage, quantity} = cartItem;
            return (
              <div key={cartItem.id} className='carti'>
                <div className='producti'>
                  <div>
                    <img src={productImage} alt={name} />
                  </div>
                  <span>{name}</span>
                </div>
             
                <div className='productQuantity'>
                  <span className='checkout-icon'>&#10094;</span>
                  <span>{quantity}</span>
                  <span 
                    className='checkout-icon'
                    onClick={() => addItem(cartItem)}>&#10095;</span>
                </div>

                <div className='productPrice'>
                  <span>{price}</span>
                </div>

                <div className='btn-romove'>
                <span 
                  className='checkout-icon'
                  onClick={() => deleteFromCart(cartItem)}>&#10005;</span>
                </div>
            </div>
            )
          })
        }
        <div className='subtotal'>
          <h2>Total: 1000 Kz</h2>
      </div>
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  addItem: cartItem => dispatch(addItem(cartItem)),
  deleteFromCart: cartItem => dispatch(deleteFromCart(cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);