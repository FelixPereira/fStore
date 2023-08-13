import styled from 'styled-components';
import {
  nineHundred,
  nineHundredFifty,
  thousandTwoHundredFifty,
} from '../../responsive';

export const Container = styled.main`
  min-height: 100vh;
  position: absolute;
  right: 0;
  width: 100vw;

  ${nineHundred({ width: '72vw' })};
  ${nineHundredFifty({ width: '75vw' })};
  ${thousandTwoHundredFifty({ width: '80vw' })};
`;

export const Wrapper = styled.div`
  padding: 1.875rem 1.875rem 1.875rem 2.5rem;
`;

export const Rodape = styled.footer`
  background-color: #fff;
  text-align: center;
  color: var(--main-color);
  padding: 0.625rem 1.875rem;
  margin-top: 3rem;
`;
