import React from  'react';
import { useParams } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { selectShopProduct } from '../../redux/shop/shopSelector';
import CustomButton from '../../components/customButton/CustomButton';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { 
  ProductPageContainer,
  ProductImageContainer,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  QuantityContainer,
  Arrow,
  ArrowContainer,
  ButtonsContainer,
  BtnContainer,
  RightContainer} from './singleProductPageStyle';

const SingleProductPage = () => {
  const { categoryUrl, productUrl } = useParams();
  const shopProduct = useSelector(selectShopProduct(categoryUrl, productUrl));
  const {name, productImage, price, quantity} = shopProduct;

  console.log(shopProduct);

  return(
    <ProductPageContainer>
      <ProductImageContainer>
        <img 
          className='product-image' 
          src={`${productImage}`} 
          alt={`${name}`} />
      </ProductImageContainer>
      
      <RightContainer>
        <ProductInfoContainer>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price}</ProductPrice>
        </ProductInfoContainer>

        <ButtonsContainer>
          <QuantityContainer>
            <ArrowContainer>
              <Arrow>&#10094;</Arrow>
            </ArrowContainer>
            <ArrowContainer>5</ArrowContainer>
            <ArrowContainer>
              <Arrow>&#10095;</Arrow>
            </ArrowContainer>
          </QuantityContainer>
          <BtnContainer>
            <CustomButton productBtn>Adicionar ao carrinho</CustomButton>
            <div className='icon-container'>
              <HeartIcon 
                className='icon' 
                title='Adicionar à lista de desejos' />
            </div>
          </BtnContainer>
        </ButtonsContainer>
      </RightContainer>
    </ProductPageContainer>
  )
};

export default SingleProductPage;