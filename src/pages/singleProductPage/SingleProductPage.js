import React from  'react';
import { useParams } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { selectShopProduct } from '../../redux/shop/shopSelector';
import CustomButton from '../../components/customButton/CustomButton';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { 
  ProductName,
  ProductPageContainer,
  ProductImageContainer,
  ProductInfoContainer,
  ProductPrice,
  QuantityContainer,
  IconContainer,
  ButtomContainer } from './singleProductPageStyle';

const SingleProductPage = () => {
  const { categoryUrl, productUrl } = useParams();
  const shopProduct = useSelector(selectShopProduct(categoryUrl, productUrl));
 
  console.log(shopProduct);

  return(
    <ProductPageContainer>
      <ProductImageContainer>
        <img className='product-image' src={`${shopProduct.productImage}`} alt={`${shopProduct.name}`} />
      </ProductImageContainer>
      
      <ProductInfoContainer>
        <ProductName>{shopProduct.name}</ProductName>
        <ProductPrice>{shopProduct.price}</ProductPrice>
          <QuantityContainer>
            <IconContainer>
              <span>&#10094;</span>
            </IconContainer>
            <IconContainer>5</IconContainer>
            <IconContainer>
              <span>&#10095;</span>
            </IconContainer>
          </QuantityContainer>
        </ProductInfoContainer>
        <ButtomContainer>
          <CustomButton productBtn>Adicionar ao carrinho</CustomButton>
          <HeartIcon 
            className='icon' 
            title='Adicionar à lista de desejos' />
        </ButtomContainer>
        
    </ProductPageContainer>
  )
};

export default SingleProductPage;