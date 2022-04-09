import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as AddToCartIcon } from '../../assets/cart-add.svg';
import { ReactComponent as RemoveFromWishlistIcon } from '../../assets/cross.svg';
import { addItemToCart } from '../../redux/cart/cartActions';
import { deleteFromWishList } from '../../redux/wishList/wishListAction';
import IconContainer from '../icon/Icon';

import { 
  Container,
  IconsContainer,
  Product,
  ImgContainer,
  Image,
  ProductInfo,
  ProductName,
  ProductPrice } from './wishList-Cart-item-style.js';

const SmallItem = ({
  cartItem, 
  item, 
  addItemToCart, 
  deleteFromWishList
  }) => {
  const {name, price, quantity, productImage} = item;
  return(
    <Container>
      <Product>
        <ImgContainer>
          <Image src={productImage} alt={name} />
        </ImgContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            { cartItem && `${quantity} x ` } 
            {price}
          </ProductPrice>
        </ProductInfo>
      </Product>
      { cartItem || 
        <IconsContainer>
          <IconContainer 
            wishlist
            onClick={() => addItemToCart(item)}>
              <AddToCartIcon className='icon'/>
          </IconContainer>
          <IconContainer 
            wishlist
            onClick={() => deleteFromWishList(item)}>
              <RemoveFromWishlistIcon className='icon' />
          </IconContainer>
        </IconsContainer>
      }
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  deleteFromWishList: item => dispatch(deleteFromWishList(item))
});
export default connect(null, mapDispatchToProps)(SmallItem);