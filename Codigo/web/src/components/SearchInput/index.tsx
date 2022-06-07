import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';
import { GrSearch } from 'react-icons/gr';
import styles from './input.module.scss';
interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: string;
  error?: FieldError | undefined;
}

const SearchInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  SearchInputProps
> = ({ placeholder, type = 'text', error, ...rest }, ref) => {
  const [isActive, setIsActive] = useState(false);

  if (!isActive) {
    return (
      <button
        className={styles['before-btn']}
        onClick={() => setIsActive(true)}
      >
        <GrSearch size={20} fill="#FFFFF"></GrSearch>
      </button>
    );
  }

  return (
    <div className={styles['input-wrapper']}>
      <input
        className={`${styles['input-container']} ${error ?? 'invalid'}`}
        ref={ref}
        type={type}
        placeholder={placeholder}
        onBlur={() => setIsActive(false)}
        {...rest}
      />
      {!!error && (
        <span className={`${styles['invalid-message']}`}>{error.message}</span>
      )}
    </div>
  );
};

const SearchInput = forwardRef(SearchInputBase);

export default SearchInput;
