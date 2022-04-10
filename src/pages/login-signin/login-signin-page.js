import React from 'react';
import { 
  Container,
  Wrapper,
  FormHeader,
  FormTitle,
  FormMessage,
  FormBody,
  Form,
  InputContainer,
  ButtonsContainer } from './login-signin-style.js';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';

const LoginSigninPage = () => {
  return(
    <Container>
      <Wrapper className='login'>
        <FormHeader>
          <FormTitle>Já tenho uma conta</FormTitle>
          <FormMessage>Inicie sessão com o seu email e senha</FormMessage>
        </FormHeader>
        <FormBody>
          <Form>
            <InputContainer>
              <FormInput name='email' label='Email' type='email'/>
              <FormInput name='password' label='Senha' type='password'/>
            </InputContainer>
            <ButtonsContainer>
              <CustomButton> Login </CustomButton>
              <CustomButton> Login com o Google </CustomButton>
            </ButtonsContainer>
          </Form>
        </FormBody>
      </Wrapper>
      <Wrapper>
        <FormHeader>
          <FormTitle>Ainda não tenho uma conta</FormTitle>
          <FormMessage>Crie uma conta</FormMessage>
        </FormHeader>
        <FormBody>
          <Form>
            <InputContainer>
              <FormInput name='email' label='Email' type='email'/>
              <FormInput name='password' label='Senha' type='password'/>
              <FormInput name='confirmPassword' label='Confirmar a senha' type='password'/>
            </InputContainer>
            <ButtonsContainer>
              <CustomButton> Criar conta </CustomButton>
            </ButtonsContainer>
          </Form>
        </FormBody>
      </Wrapper>
    </Container>
  )
};

export default LoginSigninPage;