import styled from 'styled-components';
import { sevenHundred } from '../../responsive';

export const Container = styled.div`
  padding: 3.125rem 0 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${sevenHundred({
    flexDirection: 'row',
    justifyContent: 'space-between'
  })};
`;

export const Wrapper = styled.div`
  width: 100%;

  &.login {
    margin-bottom: 3.125rem;
  }

  ${sevenHundred({width: '48%'})};
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