import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  padding-top: 50px;
  margin: 0 auto;
`;

export const ProductImageContainer = styled.div`
  overflow: hidden;
`;

export const ProductInfoContainer = styled.div`

`;

export const ProductName = styled.h1`
  color: #fff;
`;

export const ProductPrice = styled.h3`
  color: #fff;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  color: #fff;
  border: solid 1px #fff;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :active {
    transform: scale(1.1)
  }
`;

export const ButtomContainer = styled.div`
  display: flex;
  align-items: center;
`;
