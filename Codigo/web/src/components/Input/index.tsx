import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import { Container, FormErrorMessage } from './styles';
interface InputProps {
  placeholder: string;
  type?: string;
  error: FieldError | undefined;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, type = 'text', error, ...rest },
  ref
) => {
  return (
    <>
      <Container
        isInvalid={!!error}
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </>
  );
};

const Input = forwardRef(InputBase);

export default Input;
