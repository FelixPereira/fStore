import styled from 'styled-components';
import { 
  eightHundredNinetyNine,
  nineHundred, 
  nineHundredFifty,
  thousandTwoHundredFifty } from '../../responsive';

export const Container = styled.aside`
  border-right: 5px solid #2b2040;
  background-color: #582dd3;
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  left: 0;

  ${eightHundredNinetyNine({
    position: 'fixed', 
    zIndex: '2', 
    transform: 
    'translateX(-300vw)', 
    transition: 'ease-in-out .3s'})};
  ${nineHundred({width: '28vw'})};
  ${nineHundredFifty({width: '25vw'})};
  ${thousandTwoHundredFifty({width: '20vw'})};
`;