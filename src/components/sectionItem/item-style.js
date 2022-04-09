import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const DetailTooltip = styled.span`
  background-color: var(--main-color);
  color: #ffffff;
  padding: 10px;
  position: absolute;
  left: 45px;
  font-size: 14px;
  white-space: nowrap;
  border-radius: 5px;
  font-weight: bold;
  display: none;
`;

export const AddtoCartTooltip = styled(DetailTooltip)``;

export const IconsContainer = styled.div`
  width: 50px;
  height: 100px;
  background-color: #ffffff;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 3px;
  transform: translateX(-200px);
  transition: ease-in-out .6s;
`;

export const Container = styled.div`
  background-color: var(--main-color);
  border-radius: 10px;
  height: 17.75rem;
  overflow: hidden;
  position: relative;

  &:hover ${IconsContainer} {
    transform: translateX(0);
    transition: ease-in-out .3s; 
  }
`;

export const ProductImage = styled.div`
  height: 50%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  z-index: 1;

  &:hover{
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  position: relative;
  height: 50%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductName = styled.h3`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ProductPrice = styled.div`
  background-color: #ffffff;
  color: var(--main-color);
  font-size: 14px;
  font-weight: bold;
  border-radius: 30px;
  padding: 3px 10px;
`;

export const AddToCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  &:hover ${DetailTooltip} {
    display: block;
  }
`;

export const AddToCartContainer = styled.div`
  display: flex;
  &:hover ${AddtoCartTooltip} {
    display: block;
  }
`;