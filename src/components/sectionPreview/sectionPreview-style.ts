import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  fourHundred,
  sixHundredFifty,
  nineHundred, 
  nineHundredFifty,
  thousandTwoHundredFifty } from '../../responsive';

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
  grid-template-columns: 1fr;
  gap: 30px 15px;
  width: 100%;

  ${fourHundred({gridTemplateColumns: '1fr 1fr'})};
  ${sixHundredFifty({gridTemplateColumns: '1fr 1fr 1fr'})};
  ${nineHundred({gridTemplateColumns: '1fr 1fr'})};
  ${nineHundredFifty({gridTemplateColumns: '1fr 1fr 1fr 1fr'})};
  ${thousandTwoHundredFifty({gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'})};
`;

