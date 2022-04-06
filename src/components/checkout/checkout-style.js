import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  padding-top: 50px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`

`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  background-color: #fff;
  width: 50%;
  border-radius: 30px;
  padding-right: 50px;
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 100px;
  margin-right: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  width: 30%;
  margin-right: 10px;
`;

export const ProductName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.25rem;
`;
export const ProductPrice = styled.span`
  font-size: 18px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  margin-right: 10px;
`;

export const Arrowt = styled.div`
  cursor: pointer;
`;

export const Quantity = styled.div`
  margin: 0 10px;
  font-size: 18px;
`;

export const Arrow = styled.div`
  color: #000;
  border: solid 1px #000;
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

