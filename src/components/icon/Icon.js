import React from 'react';
import { Container, IconChildren } from './icon-style';

const IconContainer = ({children, ...otherProps}) => {
  return(
    <Container {...otherProps}>
      {children}
    </Container>
  )
};

export default IconContainer;