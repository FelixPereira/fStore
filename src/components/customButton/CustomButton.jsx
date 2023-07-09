import React from 'react';

import { StyledButton } from './customButton-style.js';

const CustomButton = ({children, withGoogle,  ...otherProps}) => {
  return(
    <StyledButton {...otherProps}>{children}</StyledButton>
  )
}

export default CustomButton;