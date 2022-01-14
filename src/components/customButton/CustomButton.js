import React from 'react';

import './customButton.css';

const CustomButton = ({children, productBtn}) => {
  return(
    <button className={`customButton ${productBtn ? 'productBtn' : '' }`}>{children}</button>
  )
}

export default CustomButton;