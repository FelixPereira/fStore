import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  right: 0;

  @media screen and (min-width: 900px) {
    & {
      width: 75%;
    }
  }
  
  @media screen and (min-width: 1024px) {
    & {
      width: 80%;
    }
  }
  
  @media screen and (min-width: 1250px) {
    & {
      width: 85%;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 30px;
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
