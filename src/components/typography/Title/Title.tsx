import cn from 'classnames';
import { FC } from 'react';

import { TitleProps } from './Title.props';

const Title: FC<TitleProps> = ({ tag = 'h2', variant = 'dark', children, className }) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        {
          ['text-black']: variant == 'black',
          ['text-main_dark']: variant == 'dark',
          ['text-white']: variant == 'light',
          ['font-semibold text-4xl  ']: tag == 'h1',
          ['urbanist font-normal text-2xl']: tag == 'h2',
          ['font-normal text-xl ']: tag == 'h3',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Title;
