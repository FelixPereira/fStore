import styled from 'styled-components';
import { sixHundredFifty, thousandHundred } from '../../responsive';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  margin: 0 auto;

  ${sixHundredFifty({flexDirection: 'row', alignItems: 'flex-start'})};

`;

export const ProductContainer = styled.div`
  width: 100%;
  margin-bottom: 1.875rem;

  ${sixHundredFifty({width: '60%', marginRight: '20px'})};
  ${thousandHundred({width: '50%'})};
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.875rem;
  background-color: #fff;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  padding-right: 20px;
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
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
  padding: 20px 0;
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
  width: 30%;
  margin-right: 10px;
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

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 370px;
  background-color: var(--main-color);
  border-radius: 5px;
  border: solid 1px #fff;

  ${sixHundredFifty({width: '40%'})};
  ${thousandHundred({width: '30%'})};
`;

export const Wrapper = styled.div`
  padding: 30px 15px;
  min-height: 100%;
`;

export const TotalAmount = styled.h2`
  color: #fff;
`;

export const OrderSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const TotalText = styled.h3`
  color: #fff;
  margin-right: 20px;
`;

export const PaymentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-top: 40px;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const CardNumber = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

export const Date = styled(CardNumber)``;
export const Cvc = styled(CardNumber)``;



