import cn from 'classnames';

// import Arrow from 'public/images/right-arrow.svg';
import { FC } from 'react';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
  variant = 'colored',
  disabled = false,
  size = 'big',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex items-center  rounded-xl border border-solid py-2.5 px-10 text-xl',
        className,
        { ['w-[140px]']: size == 'small', ['w-[214px]']: size == 'big' },

        !disabled && {
          ['justify-center border-main_dark bg-main_dark text-white duration-300 hover:border-white focus:border-white']:
            variant == 'colored',
          ['justify-center border-white bg-white text-main_dark duration-300 hover:border-main_dark']:
            variant == 'white',
        },
        disabled && {
          ['primary pointer-events-none justify-center border-gray_dark bg-gray_dark text-white']:
            variant == 'colored',
          ['border-gray_dark bg-white pointer-events-none justify-center text-gray_dark ']:
            variant == 'white',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
