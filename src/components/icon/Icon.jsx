import React from 'react';
import { Container } from './icon-style';

const IconContainer = ({children, ...otherProps}) => {
  return(
    <Container {...otherProps}>
      {children}
    </Container>
  )
};

export default IconContainer;