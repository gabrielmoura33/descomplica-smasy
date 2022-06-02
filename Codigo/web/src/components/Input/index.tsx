import React, { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Container } from './styles';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  nameRef: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  nameRef,
  register,
  required = false,
  ...rest
}) => {
  return <Container {...(register(nameRef), { required })} {...rest} />;
};

export default Input;
