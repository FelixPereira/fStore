import styled from 'styled-components';

export const Container = styled.div`
  padding: 3.125rem 0 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: 700px) {
    & {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  &.login {
    margin-bottom: 3.125rem;
  }

  @media screen and (min-width: 43.75rem) {
    & {
    width: 48%;
    }
  
    &.login {
      margin-right: 1.875rem;
      margin-bottom: 0;
    }
  }
`;

export const FormHeader = styled.div`
  width: 100%;
  color: #fff;
  background-color: #582DD3;
  border-radius: 1.25rem 1.25rem 0 0;
  padding: 1.25rem 2.5rem;
  border-bottom: 0.3125rem solid #2b2040;
  text-align: center;
`;

export const FormTitle = styled.h3``;
export const FormMessage = styled.span``;

export const FormBody = styled.div`
  border-radius: 0 0 0.3125rem 0.3125rem;
  padding: 40px;
  background-color: #fff;
`;

export const Form = styled.form``;
export const InputContainer = styled.div``;

export const ButtonsContainer = styled.div`
  width: 80%;
`;