import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 50px 0 0;
`;

export const CategoryName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
  cursor: pointer;
  display: inline-block;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 7.5px) calc(50% - 7.5px);
  gap: 30px 15px;
  width: 100%;

  @media screen and (min-width: 600px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  
  @media screen and (min-width: 1024px) {
    & {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  
  @media screen and (min-width: 1250px) {
    & {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;
