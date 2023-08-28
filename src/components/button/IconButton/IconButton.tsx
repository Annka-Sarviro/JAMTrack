import cn from 'classnames';
import { FC } from 'react';

import { IconButtonProps } from './IconButton.props';

const IconButton: FC<IconButtonProps> = ({
  className,
  label,
  children,
  disabled = false,
  accent,
  variant,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      type={type}
      className={cn(
        `  ${
          accent
            ? 'bg-main_dark fill-white border-2'
            : 'bg-white fill-main_dark border border-main_dark'
        }  ${
          disabled ? 'fill-gray_dark pointer-events-none border-gray_dark' : ''
        } h-12 w-12 flex justify-center items-center border-solid hover:border-white duration-300  rounded-full hover:bg-main_dark focus:bg-main_dark hover:w-14 focus:w-14 hover:h-14 focus:h-14  hover:fill-white focus:fill-white hover:border-2 focus:border-2`,
        {
          [` border-none fill-main_theme hover:w-fit focus:w-fit hover:h-fit focus:h-fit hover:border-none focus:border-none hover:fill-main_dark focus:fill-main_dark hover:bg-white focus:bg-white`]:
            variant == 'add',
        },
        className
      )}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
