import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, .8);
  filter: blur(10px);
  height: 100%;
  width: 100%;

  @media screen and (min-width: 900px) {
    & {
      display: none;
    }
  }
`;
