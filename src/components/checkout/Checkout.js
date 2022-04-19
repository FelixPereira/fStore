import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectTotal } from '../../redux/cart/cartSelectors';
import { 
  addItemToCart, 
  deleteItemFromCart,
  decreaseItemQuantity } from '../../redux/cart/cartActions';

import StripeCheckoutButton from '../stripe/StripeButton';
import {
  Container,
  ProductContainer,
  Product,
  ImageContainer,
  Image,
  InfoContainer,
  ProductName,
  ProductPrice,
  QuantityContainer,
  Arrow,
  Quantity,
  CheckoutContainer, 
  Wrapper,
  TotalAmount,
  OrderSummary,
  TotalText,
  PaymentInfoContainer,
  PaymentInfo,
  Title,
  CardNumber,
  Date,
  Cvc } from './checkout-style.js';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotal);

  return(
    <Container>
      <ProductContainer>
        {
          cartItems.map(cartItem => {
            const {name, price, productImage, quantity} = cartItem;
            return (
              <Product>
                <ImageContainer>
                  <Image src={productImage} />
                </ImageContainer>
                <InfoContainer>
                  <ProductName>{name}</ProductName>
                  <ProductPrice>{price}</ProductPrice>
                </InfoContainer>
                <QuantityContainer>
                  <Arrow onClick={() => dispatch(decreaseItemQuantity(cartItem))}>&#10094;</Arrow>
                  <Quantity>{quantity}</Quantity>
                  <Arrow onClick={() => dispatch(addItemToCart(cartItem, 1))}>&#10095;</Arrow>
                </QuantityContainer>
                <Arrow onClick={() => dispatch(deleteItemFromCart(cartItem))}>&#10005;</Arrow>
              </Product>
            )
          })
        }
      </ProductContainer>
      <CheckoutContainer>
        <Wrapper>
          <OrderSummary>
            <TotalText>Total a pagar:</TotalText>
            <TotalAmount>{total}</TotalAmount>
          </OrderSummary>
          <PaymentInfoContainer>
            {
              total > 0 ?
                <>
                  <StripeCheckoutButton price={total} />

                  <PaymentInfo>
                    <Title>Dados do cartão de crédito para testar o pagamento:</Title>
                    <CardNumber>Número do cartão: 4242 4242 4242 4242</CardNumber>
                    <Date>MM / YY: 12/25</Date>
                    <Cvc>CVC: 123</Cvc>
                  </PaymentInfo>
                </>
              : null
            }          
          </PaymentInfoContainer>
        </Wrapper>
      </CheckoutContainer>
    </Container>
  )
};


export default Checkout;