import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as ViewProduct } from '../../assets/eye.svg';
import { connect } from 'react-redux';
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


const Item = ({item, categoryUrl, addItemToCart, addToWishList, productPath}) => {
  const {name, price, productImage} = item;
  const productUrl = name.split(' ').join('-').toLowerCase();

  return(
    <Container>
      <ProductImage style={{backgroundImage: `url(${productImage})`}} />
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price} Kz</ProductPrice>
        </ProductInfo>
        <AddToCart>
          <CustomButton productBtn onClick={() => addItemToCart(item)}>
            Adicionar ao carrinho
          </CustomButton>
        </AddToCart>
      </ProductInfoContainer>
      <IconsContainer>
        <AddToCartContainer>
          <IconContainer onClick={() => addToWishList(item)}>
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

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  addToWishList: item => dispatch(addToWishList(item))
})

export default connect(null, mapDispatchToProps)(Item);