import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleDropdown } from '../../redux/cart/cartActions';

import './cartDropdown-style.js';
import SmallItem from '../wishList-cart-item/wishList-Cart-item';
import CustomButton from '../customButton/CustomButton';

import { Container, ItemContainer, Message } from './cartDropdown-style';


const CartDropdown = ({cartItems, toggleDropdown}) => {
  const navigate = useNavigate();
  const checkoutAndToggleDropdown = () => {
    navigate('/cartpage');
    toggleDropdown();
    
  }
  return(
    <Container className='cartDropdown'>
      {
        cartItems.length 
        ? <ItemContainer className='cartItems-container'>
            {
              cartItems.map(cartItem => (
                <SmallItem cartItem key={cartItem.id} item={cartItem} />
              ))
            }
          </ItemContainer>
        : <Message className='empty-message'>O carrinho está vazio</Message>
      } 
      <CustomButton onClick={ checkoutAndToggleDropdown } productBtn >Checkout</CustomButton>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);