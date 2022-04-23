import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  position: absolute;
  right: 0;
  width: 100vw;
  
  @media screen and (min-width: 900px) {
    & {
      width: 72vw;
    }
  }

  @media screen and (min-width: 950px) {
    & {
      width: 75vw;
    }
  }

  @media screen and (min-width: 1250px) {
    & {
      width: 80vw;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 30px 30px 30px 30px;
`;

export const MainContent = styled.main``;

export const Rodape = styled.footer`
  background-color: #fff;
  text-align: center;
  color: var(--main-color);
  padding: 10px 30px;
  margin-top: 3rem;
`;

export const RodapeText = styled.strong``;
