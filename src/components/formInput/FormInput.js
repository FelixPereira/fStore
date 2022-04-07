import React from 'react';
import { Container, Label, Input } from './formInput-style.js';

const FormInput = ({type, label, name}) => {
  return(
    <Container>
      <Label id={name} >{label}</Label>
      <Input type={type} name={name}/>
    </Container>
  )
};

export default FormInput;