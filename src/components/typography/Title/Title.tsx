import cn from 'classnames';
import { FC } from 'react';

import { TitleProps } from './Title.props';

export const Title: FC<TitleProps> = ({ tag = 'h2', variant = 'dark', children, className }) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        {
          ['text-dark']: variant == 'dark',
          ['text-white_light']: variant == 'light',
          [' font-extrabold leading-10  md:text-[44px] xl:text-7xl']: tag == 'h1',
          [' text-2xl font-semibold md:text-[32px] md:leading-snug xl:text-[40px] xl:leading-[1.4]']:
            tag == 'h2',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};
