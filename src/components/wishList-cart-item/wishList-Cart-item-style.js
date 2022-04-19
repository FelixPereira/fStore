import styled from 'styled-components';

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(12.5rem);
  height: 100%;
  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.875rem;
  margin-right: 0.625rem;
  overflow: hidden;
  height: 55px;

  &:hover ${IconsContainer} {
    transform: translateY(0);
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  width: 30%;
  margin-right: 18px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const ProductInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #fff;
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  color: #b7a3da;
`;