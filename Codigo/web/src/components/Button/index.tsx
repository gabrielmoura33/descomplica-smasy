import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, type, ...rest }) => {
  return (
    <Container type={type ?? 'button'} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
