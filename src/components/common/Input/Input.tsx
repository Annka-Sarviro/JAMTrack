'use client';
import { FC, useState } from 'react';

import { ICONS } from '@/components/icons/icons.const';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input: FC<InputProps> = ({
  label,
  name,
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
        className={`h-12 peer placeholder:text-transparent rounded-xl px-6 py-2 ${
          button ? 'pr-[52px]' : ''
        } w-full text-xl`}
        placeholder={name}
        type={inputType}
        {...rest}
      />
      {button && (
        <button
          className="absolute right-6 top-3"
          type="button"
          onClick={togglePassword}
          aria-label={inputType === 'password' ? 'Показати пароль' : 'Приховати пароль'}
        >
          <ICONS.EYE
            width="24px"
            height="24px"
            className="transition-all stroke-gray_dark hover:stroke-main_dark"
          />
        </button>
      )}
      <label
        className="absolute transition-all -top-6 left-4 peer-focus:-top-6 peer-focus:left-4 peer-placeholder-shown:top-2 peer-placeholder-shown:left-6 text-base peer-focus:text-base peer-placeholder-shown:text-xl text-black peer-focus:text-black peer-placeholder-shown:text-gray_dark"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
