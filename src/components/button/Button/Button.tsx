import cn from 'classnames';

// import Arrow from 'public/images/right-arrow.svg';
import { FC } from 'react';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex w-full max-w-[212px] items-center gap-3 rounded-sm border-2 border-solid p-[10px] text-lg',
        className,
        !disabled && {
          ['justify-center border-primary bg-primary text-white_light duration-300 hover:bg-hover focus:bg-hover']:
            variant == 'primary',
          ['justify-center border-white_light bg-white_light text-primary duration-300 hover:shadow-button_hover']:
            variant == 'secondary',
        },
        disabled && {
          ['primary pointer-events-none justify-center border-gray_light bg-gray_light text-white_light']:
            variant == 'primary',
          ['border-disabled_secondary bg-disabled_secondary pointer-events-none justify-center text-primary ']:
            variant == 'secondary',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
