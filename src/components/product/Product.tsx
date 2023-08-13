// import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
// import { ReactComponent as ViewProduct } from '../../assets/eye.svg';
import { useDispatch } from 'react-redux';
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
  StyledLink,
} from './product-style';

import CustomButton from '../customButton/CustomButton';
import IconContainer from '../icon/Icon';
import { Product } from '../../@types/product';

interface ProductProps {
  product: Product;
  categoryUrl?: string;
  productPath?: string;
}

const ProductItem = ({ product, categoryUrl, productPath }: ProductProps) => {
  const { name, price, productImage } = product;
  const dispatch = useDispatch();
  const formatedName = name.split(' ').join('-').toLowerCase();
  const productUrl = `${categoryUrl}/${formatedName}`
    .split('/')
    .filter((url) => url !== 'undefined')
    .join('/');

  return (
    <Container>
      <ProductImage style={{ backgroundImage: `url(${productImage})` }} />
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price} Kz</ProductPrice>
        </ProductInfo>
        <AddToCart>
          <CustomButton
            productBtn
            onClick={() => dispatch(addItemToCart(product, 1))}
          >
            Adicionar ao carrinho
          </CustomButton>
        </AddToCart>
      </ProductInfoContainer>
      <IconsContainer>
        <AddToCartContainer>
          <IconContainer onClick={() => dispatch(addToWishList(product))}>
            {/* <HeartIcon /> */}
          </IconContainer>
          <AddtoCartTooltip>Favoritos</AddtoCartTooltip>
        </AddToCartContainer>
        <StyledLink to={productUrl}>
          <IconContainer>
            {/* <ViewProduct className='icon' /> */}
          </IconContainer>
          <DetailTooltip>Ver detalhes</DetailTooltip>
        </StyledLink>
      </IconsContainer>
    </Container>
  );
};

export default ProductItem;