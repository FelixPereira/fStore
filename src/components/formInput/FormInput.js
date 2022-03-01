import React from 'react';
import './formInput.css';

const FormInput = ({type, label, name}) => {
  return(
    <div className='form-field'>
      <label 
        id={name} 
        className='field-label'>{label}</label>
      <input 
        type={type}
        name={name}
        className='form-input' />
    </div>
  )
};

export default FormInput;