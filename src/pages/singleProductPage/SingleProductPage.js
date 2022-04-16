import React, { useState, useCallback } from  'react';
import { useParams } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { selectShopProduct } from '../../redux/shop/shopSelector';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { addItemToCart } from '../../redux/cart/cartActions';
import { addToWishList } from '../../redux/wishList/wishListAction';
import IconContainer from '../../components/icon/Icon';
import { 
  ProductPageContainer,
  ProductImageContainer,
  Image,
  ProductInfo,
  ProductName,
  ProductPrice,
  QuantityContainer,
  Arrow,
  ArrowContainer,
  Wrapper,
  ButtonsContainer,
  ProductInfoContainer,
  BtnAddToCart} from './singleProductPageStyle';


const SingleProductPage = () => {
  const { categoryUrl, productUrl } = useParams();
  const shopProduct = useSelector(selectShopProduct(categoryUrl, productUrl));
  const {name, productImage, price} = shopProduct;
  const dispatch = useDispatch();
  const [ itemquantity, setitemQuantity ] = useState(1);

  const increaseQuantityHandler = useCallback(() => {
    setitemQuantity(prev => prev + 1);
  }, []);

  const decreaseQuantityHandler = () => {
    return itemquantity === 1 ? 1 : setitemQuantity(itemquantity - 1);
  };


  return(
    <ProductPageContainer>
      <ProductImageContainer>
        <Image src={`${productImage}`} alt={`${name}`} />
      </ProductImageContainer>
      
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price}</ProductPrice>
        </ProductInfo>

        <Wrapper>
          <QuantityContainer>
            <ArrowContainer onClick={decreaseQuantityHandler}>
              <Arrow>&#10094;</Arrow>
            </ArrowContainer>
            <ArrowContainer>{itemquantity}</ArrowContainer>
            <ArrowContainer onClick={increaseQuantityHandler}>
              <Arrow>&#10095;</Arrow>
            </ArrowContainer>
          </QuantityContainer>
          <ButtonsContainer>
            <BtnAddToCart 
              onClick={() => dispatch(addItemToCart(shopProduct, itemquantity))} 
              productBtn>Adicionar ao carrinho</BtnAddToCart>
            <IconContainer onClick={() => dispatch(addToWishList(shopProduct))}>
              <HeartIcon 
                className='icon' 
                title='Adicionar à lista de desejos' />
            </IconContainer>
          </ButtonsContainer>
        </Wrapper>
      </ProductInfoContainer>
    </ProductPageContainer>
  )
};

export default SingleProductPage;