import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 100%;
  width: ${props => props.wishlist ?  21 : 28}px;
  height: ${props => props.wishlist ?  21 : 28}px;
  padding: ${props => props.wishlist ?  3 : 5}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  & .icon {
    height: 20px;
    width: 20px;
  }
`;