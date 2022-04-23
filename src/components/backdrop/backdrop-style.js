import styled from 'styled-components';
import { nineHundred } from '../../responsive';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, .8);
  filter: blur(10px);
  height: 100%;
  width: 100%;

  ${nineHundred({display: 'none'})};
`;
