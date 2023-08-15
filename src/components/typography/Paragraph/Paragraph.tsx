import cn from 'classnames';
import { FC } from 'react';

import { ParagraphProps } from './Paragraph.props';

const Paragraph: FC<ParagraphProps> = ({
  variant = 'dark',
  variantFontSize,
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'font-light',
        {
          ['text-dark']: variant == 'dark',
          ['text-white']: variant == 'white',
          ['text-xl']: variantFontSize == 'lg_20',
          ['text-base']: variantFontSize == 'sm_16',
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
