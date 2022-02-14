import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleDropdown } from '../../redux/cart/cartActions';

import './cartDropdown.css';
import SmallItem from '../wishList-cart-item/wishList-Cart-item';
import CustomButton from '../customButton/CustomButton';

const CartDropdown = ({cartItems, toggleDropdown}) => {
  const navigate = useNavigate();
  const checkoutAndToggleDropdown = () => {
    navigate('/cartpage');
    toggleDropdown();
    
  }
  return(
    <div className='cartDropdown'>
      {
        cartItems.length 
        ? <div className='cartItems-container'>
            {
              cartItems.map(({name, price, quantity, productImage}, id) => (
              <SmallItem cartItem key={id} itemName={name} itemPrice={price} itemQuantity={quantity} itemImg={productImage} />
              ))
            }
          </div>
        : <span className='empty-message'>O carrinho está vazio</span>
      } 
      <CustomButton onClick={ checkoutAndToggleDropdown } productBtn >Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);