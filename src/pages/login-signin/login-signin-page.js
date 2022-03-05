import React from 'react';
import './login-signin.css';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';

const LoginSigninPage = () => {
  return(
    <div className='login-signin'>
      <div className='login'>
        <div className='login-signin--header'>
          <h3>Já tenho uma conta</h3>
          <span>Inicie sessão com o seu email e senha</span>
        </div>
        <div className='login-signin--body'>
          <form>
            <div className='form-input-grup'>
              <FormInput name='email' label='Email' type='email'/>
              <FormInput name='password' label='Senha' type='password'/>
            </div>
            <div className='form-buttons'>
              <CustomButton> Login </CustomButton>
              <CustomButton> Login com o Google </CustomButton>
            </div>
          </form>
        </div>
      </div>
      <div className='signup'>
        <div className='login-signin--header'>
          <h3>Ainda não tenho uma conta</h3>
          <span>Crie uma conta</span>
        </div>
        <div className='login-signin--body'>
          <form>
            <div className='form-input-grup'>
              <FormInput name='email' label='Email' type='email'/>
              <FormInput name='password' label='Senha' type='password'/>
              <FormInput name='confirmPassword' label='Confirmar a senha' type='password'/>
            </div>
            <div className='form-buttons'>
              <CustomButton> Criar conta </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default LoginSigninPage;