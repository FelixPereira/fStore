import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotal } from '../../redux/cart/cartSelectors';
import { 
  addItemToCart, 
  deleteItemFromCart,
  decreaseItemQuantity } from '../../redux/cart/cartActions';

import './cartPage.css';

const CartPage = ({
  cartItems, 
  addItemToCart, 
  deleteItemFromCart,
  decreaseItemQuantity,
  total
  }) => {
    console.log(total)
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
                  <span 
                    className='checkout-icon'
                    onClick={() => decreaseItemQuantity(cartItem)}>&#10094;</span>
                  <span>{quantity}</span>
                  <span 
                    className='checkout-icon'
                    onClick={() => addItemToCart(cartItem)}>&#10095;</span>
                </div>

                <div className='productPrice'>
                  <span>{price}</span>
                </div>

                <div className='btn-romove'>
                <span 
                  className='checkout-icon'
                  onClick={() => deleteItemFromCart(cartItem)}>&#10005;</span>
                </div>
            </div>
            )
          })
        }
        <div className='subtotal'>
          <h2>Total: {total} Kz</h2>
      </div>
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: cartItem => dispatch(addItemToCart(cartItem)),
  deleteItemFromCart: cartItem => dispatch(deleteItemFromCart(cartItem)),
  decreaseItemQuantity: cartItem => dispatch(decreaseItemQuantity(cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);