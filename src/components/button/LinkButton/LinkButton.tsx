import Link, { LinkProps } from 'next/link';

import cn from 'classnames';

import { FC } from 'react';
import { LinkButtonProps } from './LinkButton.props';

const LinkButton: FC<LinkButtonProps & LinkProps> = ({
  variant = 'primary',
  disabled = false,
  size = 'big',
  href,
  children,
  className,
  ...props
}) => {
  const disabledProps = disabled ? { role: 'link', 'aria-disabled': disabled } : {};

  return (
    <Link legacyBehavior href={href} {...disabledProps}>
      <a
        className={cn(
          'flex items-center  rounded-xl border border-solid py-2.5 px-10 text-xl',
          className,
          { ['w-[140px]']: size == 'small', ['w-[214px]']: size == 'big' },

          !disabled && {
            ['justify-center border-main_dark bg-main_dark text-white duration-300 hover:border-white focus:border-white']:
              variant == 'colored',
            ['justify-center border-white bg-white text-main_dark duration-300 hover:border-main_dark']:
              variant == 'white',
            ['!max-w-[fit-content] !justify-start border-none bg-transparent py-0 px-0 text-main_theme duration-300 hover:text-main_dark focus:text-main_dark']:
              variant == 'simple',
          },
          disabled && {
            ['primary pointer-events-none justify-center border-gray_dark bg-gray_dark text-white']:
              variant == 'colored',
            ['border-gray_dark bg-white pointer-events-none justify-center text-gray_dark ']:
              variant == 'white',
            ['!max-w-[fit-content] !justify-start border-none bg-transparent py-0 px-0 text-gray_dark duration-300 ']:
              variant == 'simple',
          }
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
