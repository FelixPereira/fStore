import styled from 'styled-components';

interface ContainerProps {
  wishList?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background-color: #fff;
  border-radius: 100%;
  width: ${props => props.wishList ?  21 : 28}px;
  height: ${props => props.wishList ?  21 : 28}px;
  padding: ${props => props.wishList ?  3 : 5}px;
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