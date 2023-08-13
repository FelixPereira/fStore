import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import { 
  sixHundred, 
  sixHundredFiftyFive, 
  thousand  } from '../../responsive';

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.125rem;
  margin: 0 auto;

  ${sixHundredFiftyFive({
    flexDirection: 'row',
    alignItems: 'conter',
    justifyContent: 'space-between'
  })};

  ${thousand({width: '43.75rem'})};
`;

export const ProductImageContainer = styled.div`
  overflow: hidden;
  border-radius: 0.3125rem;
  margin-bottom: 1.25rem;

  ${sixHundred({marginRight: '1.875rem'})};
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

  ${sixHundred({alignItems: 'flex-start'})};
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

  ${sixHundred({
    marginBottom: 0,
    marginRight: '0.625rem'
  })};
`;

export const ArrowContainer = styled.div`
  color: #fff;
  border: solid 0.0625rem #fff;
  width: 2.5rem;
  height: 1.875rem;
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

  ${sixHundred({flexDirection: 'row'})};
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const BtnAddToCart = styled(CustomButton)`
  margin-right: 0.625rem;
`;