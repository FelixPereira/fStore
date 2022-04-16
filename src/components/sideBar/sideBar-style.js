import styled from 'styled-components';

export const Container = styled.aside`
  border-right: 5px solid #2b2040;
  background-color: #582dd3;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15rem;
  position: fixed;
  height: 100vh;
  left: 0;

  @media screen and (max-width: 899px) {
    & {
      position: fixed;
      z-index: 2;

      transform: translateX(-300%);
      transition: ease-in-out .3s;
    }
  }

  &.visible {
    transform: translateX(0);
  }
  
  @media screen and (min-width: 900px) {
    & {
      display: block;
      width: 25%;
    }
  }
  
  @media screen and (min-width: 1024px) {
  & {
      width: 20%;
    }
  }
  
  @media screen and (min-width: 1250px) {
    & {
      width: 15%;
    }
  }
`;
