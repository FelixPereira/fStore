import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2c2b31;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  border-radius: 10px;
  margin-right: 1.25rem;

  @media screen and (min-width: 900px) {
    & {
      width: 40%;
    }
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: transparent;
  padding: 10px;
  color: #75747a;
  font-family: 'Dosis';
  font-size: 17px;

  &::placeholder {
    color: #75747a;
  }
`;

