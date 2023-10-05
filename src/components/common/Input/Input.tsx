'use client';
import { FC, useState } from 'react';

import { ICONS } from '@/components/icons/icons.const';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input: FC<InputProps> = ({
  label,
  name,
  register,
  error,
  button = false,
  className = '',
  type = 'text',
  ...rest
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    inputType === 'text' ? setInputType('password') : setInputType('text');
  };

  return (
    <div className={cn('relative', className)}>
      <input
        id={name}
        className={cn(
          'h-12 peer placeholder:text-gray_dark rounded-xl px-6 py-2 w-full text-xl border-gray_light',
          {
            ['pr-[52px]']: button,
            ['border-red_error']: error,
            ['text-red_error']: error,
          }
        )}
        placeholder={label}
        type={inputType}
        {...register}
        {...rest}
      />
      {button && (
        <button
          className="absolute right-6 top-3"
          type="button"
          onClick={togglePassword}
          aria-label={inputType === 'password' ? 'Показати пароль' : 'Приховати пароль'}
        >
          {inputType === 'password' ? (
            <ICONS.EYE_CLOSE
              width="24px"
              height="24px"
              className="transition-all stroke-gray_dark hover:stroke-main_dark"
            />
          ) : (
            <ICONS.EYE_OPEN
              width="24px"
              height="24px"
              className="transition-all stroke-gray_dark hover:stroke-main_dark"
            />
          )}
        </button>
      )}
      {/* {error && <p className="absolute px-4 text-red_error">{error}</p>} */}
      {error && (
        <p
          className="
          absolute
          px-1
          flex
          items-center
          gap-2
          text-red_error
          w-full"
        >
          <ICONS.EXCLAMATION_MARK width="14px" height="14px" />
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
