import React from 'react';
import './login-signin.css';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';

const LoginSigninPage = () => {
  return(
    <div className='login-signin'>
      <div className='login'>
        <div className='login-signin--header'>Iniciar sessão</div>
        <div className='login-signin--body'>
          <form>
            <div className='form-input-grup'>
              <FormInput label='Email' type='email'/>
              <FormInput label='Senha' type='password'/>
            </div>
            <div className='form-buttons'>
              <CustomButton> Login </CustomButton>
              <CustomButton> Login com o Google </CustomButton>
            </div>
          </form>
        </div>
      </div>
      <div className='signup'>
        <div className='login-signin--header'>Criar uma conta</div>
        <div className='login-signin--body'>
          <form>
              <div className='form-input-grup'>
                <FormInput label='Email' type='email'/>
                <FormInput label='Senha' type='password'/>
                <FormInput label='Confirmar a senha' type='password'/>
              </div>
              <div className='form-buttons'>
                <CustomButton> Login </CustomButton>
                <CustomButton> Login </CustomButton>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
};

export default LoginSigninPage;