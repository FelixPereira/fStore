import styled from 'styled-components';

export const Container = styled.aside`
  border-right: 5px solid #2b2040;
  background-color: #582dd3;
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  left: 0;

  @media screen and (max-width: 899px) {
    & {
      position: fixed;
      z-index: 2;

      transform: translateX(-300vw);
      transition: ease-in-out .3s;
    }
  }

  @media screen and (min-width: 900px) {
    & {
      width: 28vw;
    }
  }

  @media screen and (min-width: 950px) {
    & {
      width: 25vw;
    }
  }

  @media screen and (min-width: 1250px) {
    & {
      width: 20vw;
    }
  }
`;