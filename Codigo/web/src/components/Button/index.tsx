import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, type, ...rest }: ButtonProps) {
  return (
    <button
      className={styles['btn-container']}
      type={type ?? 'button'}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
