import styled from 'styled-components';

export const Container = styled.aside`
  border-right: 5px solid #2b2040;
  background-color: #582dd3;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  @media screen and (min-width: 900px) {
    & {
      width: 28%;
    }
  }

  @media screen and (min-width: 950px) {
    & {
      width: 25%;
    }
  }

  @media screen and (min-width: 1024px) {
    & {
      width: 18%;
    }
  }
`;
