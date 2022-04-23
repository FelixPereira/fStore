import styled from 'styled-components';
import { nineHundred } from '../../responsive';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`;

export const HumburgerIcon = styled.div`
  width: 10%;
  margin-right: 1.25rem;

  ${nineHundred({display: 'none !important'})};
`;

export const RightSideIconsContainer = styled.div`
  display: flex;
  width: 20%;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;