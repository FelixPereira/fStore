import React from 'react';
import './formInput.css';

const FormInput = ({type, label}) => {
  return(
    <div className='form-field'>
      <label className='field-label'>{label}</label>
      <input 
      type={type}
      className='form-input' />
    </div>
  )
};

export default FormInput;