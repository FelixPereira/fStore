import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './customButton-style.js';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  withGoogle?: boolean;
  productBtn?: boolean;
}

// const CustomButton = ({ children, withGoogle, ...otherProps }: CustomButtonProps) => {
//   return <StyledButton {...otherProps}>{children}</StyledButton>;
// };

const CustomButton = ({ children, withGoogle, productBtn }: CustomButtonProps) => {
  return <StyledButton productBtn>{children}</StyledButton>;
};

export default CustomButton;
