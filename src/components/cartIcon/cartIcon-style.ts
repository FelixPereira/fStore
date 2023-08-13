import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 0.625rem;
  cursor: pointer;
  position: relative;
`;

export const ItemQuantity = styled.span`
  font-size: 12px;
  font-weight: bold;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;