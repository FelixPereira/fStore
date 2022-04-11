import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as ViewProduct } from '../../assets/eye.svg';
import { connect, useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartActions';
import { addToWishList } from '../../redux/wishList/wishListAction';
import { 
  Container,
  IconsContainer,
  ProductImage,
  ProductInfoContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  AddToCart,
  AddtoCartTooltip,
  DetailTooltip,
  AddToCartContainer,
  StyledLink } from './item-style';


import CustomButton from '../customButton/CustomButton';
import IconContainer from '../icon/Icon';


const Item = ({item, categoryUrl, productPath}) => {
  const {name, price, productImage} = item;
  const productUrl = name.split(' ').join('-').toLowerCase();
  const dispatch = useDispatch();
  return(
    <Container>
      <ProductImage style={{backgroundImage: `url(${productImage})`}} />
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price} Kz</ProductPrice>
        </ProductInfo>
        <AddToCart>
          <CustomButton productBtn onClick={() => dispatch(addItemToCart(item))}>
            Adicionar ao carrinho
          </CustomButton>
        </AddToCart>
      </ProductInfoContainer>
      <IconsContainer>
        <AddToCartContainer>
          <IconContainer onClick={() => dispatch(addToWishList(item))}>
            <HeartIcon/>
          </IconContainer>
          <AddtoCartTooltip>Adicionar à lista de desejos </AddtoCartTooltip>
        </AddToCartContainer>
        <StyledLink to={`${categoryUrl}/${productUrl}`}> 
          <IconContainer>
            <ViewProduct className='icon' />
          </IconContainer>
          <DetailTooltip>Ver detalhes</DetailTooltip>
        </StyledLink>
      </IconsContainer>
    </Container>
)}


export default Item;