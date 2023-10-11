import cn from 'classnames';
import { FC } from 'react';

import { ParagraphProps } from './Paragraph.props';

const Paragraph: FC<ParagraphProps> = ({
  variant = 'dark',
  variantFontSize,
  children,
  className,
  centered = false,
  ...props
}) => {
  return (
    <p
      className={cn(
        'font-normal',

        {
          ['text-main_dark']: variant == 'dark',
          ['text-black']: variant == 'black',
          ['text-white']: variant == 'white',
          ['text-center']: centered,
          ['text-2xl']: variantFontSize == 'subtitle',
          // ['text-base']: variantFontSize == 'sm_16',
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
