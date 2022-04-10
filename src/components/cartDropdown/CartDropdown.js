import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleDropdown } from '../../redux/cart/cartActions';
import { Container, ItemContainer, Message } from './cartDropdown-style';

import SmallItem from '../wishList-cart-item/wishList-Cart-item';
import CustomButton from '../customButton/CustomButton';


const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  
  const checkoutAndToggleDropdown = () => {
    navigate('/cartpage');
    dispatch(toggleDropdown());
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

export default CartDropdown;