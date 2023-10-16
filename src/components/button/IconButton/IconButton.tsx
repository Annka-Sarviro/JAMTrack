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
        `  ${
          accent
            ? 'bg-main_dark fill-white border-2'
            : 'bg-white fill-main_dark border border-main_dark'
        }  ${
          disabled ? 'fill-gray_dark pointer-events-none border-gray_dark' : ''
        } h-12 w-12 flex justify-center items-center border-solid hover:border-white group-hover:border-white  duration-300  rounded-full hover:bg-main_dark group-hover:bg-main_dark focus:bg-main_dark hover:w-14 group-hover:w-14 focus:w-14 hover:h-14 group-hover:h-14 focus:h-14  hover:fill-white group-hover:fill-white focus:fill-white hover:border-2 group-hover:border-2 focus:border-2`,
        {
          [` border-none fill-main_theme hover:w-fit focus:w-fit hover:h-fit focus:h-fit hover:border-none focus:border-none hover:fill-main_dark focus:fill-main_dark hover:bg-white focus:bg-white`]:
            variant == 'add',
          [` border-none !bg-main_card !rounded-none !rounded-r-xl !h-16 !w-10 hover:!h-16 focus:!f-16 hover:!bg-main_card focus:!bg-main_card hover:!stroke-main_dark !stroke-2 !stroke-[transparent]`]:
            variant == 'arrow',
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
