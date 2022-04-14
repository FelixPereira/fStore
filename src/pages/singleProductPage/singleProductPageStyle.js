import styled from 'styled-components';
import CustomButton from './../../components/customButton/CustomButton';

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin: 0 auto;

  @media screen and (min-width: 665px) {
    flex-direction: row;
    align-items: conter;
    justify-content: space-between;
  }

  @media screen and (min-width: 700px) {
    width: 600px;
  }

  @media screen and (min-width: 1000px) {
    width: 700px;
  }
`;

export const ProductImageContainer = styled.div`
  overflow: hidden;
  border-radius: 0.3125rem;
  margin-bottom: 1.25rem;

  @media screen and (min-width: 600px) {
    margin-right: 1.875rem;
  }
`;

export const Image = styled.img``;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    align-items: flex-start;
  }
`;

export const ProductName = styled.h1`
  color: #fff;
  margin-bottom: 0.75rem;
  font-size: 2rem;
`;

export const ProductPrice = styled.h3`
  color: #fff;
  margin-bottom: 1.25rem;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5625rem;

  @media screen and (min-width: 600px) {
    margin-bottom: 0;
    margin-right: 0.625rem;
  }
`;

export const ArrowContainer = styled.div`
  color: #fff;
  border: solid 1px #fff;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :active {
    transform: scale(1.1);
    transition: .2s;
  }
`;

export const Arrow = styled.span`
  color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const BtnAddToCart = styled(CustomButton)`
  margin-right: 0.625rem;
`;