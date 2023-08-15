import cn from 'classnames';
import { FC } from 'react';

import { IconButtonProps } from './IconButton.props';

const IconButton: FC<IconButtonProps> = ({
  className,
  label,
  children,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      type={type}
      className={cn(
        'h-fit w-fit duration-300 hover:outline-primary focus:outline-primary',
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
