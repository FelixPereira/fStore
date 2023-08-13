import { ButtonHTMLAttributes } from 'react';
import { Container } from './icon-style';

interface IconContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  wishList?: boolean;
}

const IconContainer = ({ children, wishList }: IconContainerProps) => {
  return <Container wishList={wishList}>{children}</Container>;
};

export default IconContainer;
