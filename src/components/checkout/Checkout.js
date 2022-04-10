import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { 
  selectCartItems, 
  selectTotal, 
  selectPriceTotal } from '../../redux/cart/cartSelectors';
import { 
  addItemToCart, 
  deleteItemFromCart,
  decreaseItemQuantity } from '../../redux/cart/cartActions';

import StripeCheckoutButton from '../stripe/StripeButton';
import {
  Container,
  Wrapper,
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
  TotalAmount,
  OrderSummary,
  TotalText,
  PaymentInfoContainer,
  PaymentInfo
  } from './checkout-style.js';

const Checkout = ({
  cartItems, 
  addItemToCart, 
  deleteItemFromCart,
  decreaseItemQuantity,
  total,
  priceTotal
  }) => {
  return(
    <Container>
      <Wrapper>
        {
          cartItems.map(cartItem => {
            const {name, price, price2, productImage, quantity} = cartItem;
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
                  <Arrow onClick={() => decreaseItemQuantity(cartItem)}>&#10094;</Arrow>
                  <Quantity>{quantity}</Quantity>
                  <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
                </QuantityContainer>
                <Arrow onClick={() => deleteItemFromCart(cartItem)}>&#10005;</Arrow>
              </Product>
            )
          })
        }
      </Wrapper>
      <CheckoutContainer>
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
                  <p>Dados do cartão de crédito para testar o pagamento</p>
                  <h3>Número do cartão: 4242 4242 4242 4242</h3>
                  <h4>MM / YY: 12/25</h4>
                  <h4>CVC: 123</h4>
                </PaymentInfo>
              </>
            : null
          }          
        </PaymentInfoContainer>
      </CheckoutContainer>
    </Container>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
  priceTotal: selectPriceTotal
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: cartItem => dispatch(addItemToCart(cartItem)),
  deleteItemFromCart: cartItem => dispatch(deleteItemFromCart(cartItem)),
  decreaseItemQuantity: cartItem => dispatch(decreaseItemQuantity(cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);