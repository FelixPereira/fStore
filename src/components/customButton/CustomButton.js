import React from 'react';

import './customButton.css';

const CustomButton = ({children, productBtn, ...otherProps}) => {
  return(
    <button 
      className={`customButton ${productBtn ? 'productBtn' : '' }`} {...otherProps}>{children}</button>
  )
}

export default CustomButton;