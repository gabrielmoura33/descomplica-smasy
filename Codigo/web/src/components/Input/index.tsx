import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './input.module.scss';
interface InputProps {
  placeholder: string;
  type?: string;
  error: FieldError | undefined;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, type = 'text', ...rest },
  ref
) => {
  return (
    <>
      <input
        className={styles['input-container']}
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {/* {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>} */}
    </>
  );
};

const Input = forwardRef(InputBase);

export default Input;
