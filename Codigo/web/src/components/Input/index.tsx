import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './input.module.scss';
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
      <input
        className={`${styles['input-container']} ${error ?? 'invalid'}`}
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {!!error && (
        <span className={`${styles['invalid-message']}`}>{error.message}</span>
      )}
    </>
  );
};

const Input = forwardRef(InputBase);

export default Input;
