import cn from 'classnames';
import { FC } from 'react';

import { IconButtonProps } from './IconButton.props';

const IconButton: FC<IconButtonProps> = ({
  className,
  label,
  style,
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
      style={style}
      className={cn(
        `flex justify-center items-center  duration-300 group ${
          disabled ? '!fill-gray_dark pointer-events-none !border-gray_dark !stroke-gray_dark' : ''
        }`,
        {
          [`
           h-12 w-12  border-solid hover:border-white group-hover:border-white rounded-full hover:bg-main_dark group-hover:bg-main_dark focus:bg-main_dark hover:w-14 group-hover:w-14 focus:w-14 hover:h-14 group-hover:h-14 focus:h-14 hover:fill-white group-hover:fill-white focus:fill-white hover:border-2 group-hover:border-2 focus:border-2
            ${
              accent
                ? 'bg-main_dark fill-white border-2'
                : 'bg-white fill-main_dark border border-main_dark'
            } `]: variant == 'sidebar',

          [` border-none fill-main_theme h-12 w-12 rounded-full  hover:border-none focus:border-none hover:fill-main_dark focus:fill-main_dark hover:bg-white focus:bg-white`]:
            variant == 'add',

          [`border-none bg-main_card fill-white rounded-r-xl h-16 w-10 hover:stroke-main_dark hover:stroke-2 stroke-main_card !duration-200`]:
            variant == 'arrow',
          [`h-4 w-4 fill:main_dark`]: variant == 'input',
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
