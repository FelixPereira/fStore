import React from 'react';
import './login-signin.css';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';

const LoginSigninPage = () => {
  return(
    <div className='login-signin'>
      <div className='login'>
        <h3 className='login-signin--header'>Iniciar sessão</h3>
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
        <h3 className='login-signin--header'>Criar uma conta</h3>
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