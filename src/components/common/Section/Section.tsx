import cn from 'classnames';
import { forwardRef } from 'react';

import { SectionProps } from './Section.props';

const Section = forwardRef<HTMLElement, SectionProps>(function Search({
  children,
  className,
  ...props
}) {
  return (
    <section className={cn('py-10 md:py-20 xl:py-[100px]', className)} {...props}>
      {children}
    </section>
  );
});

export default Section;
