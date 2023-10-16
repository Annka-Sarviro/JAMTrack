import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import IconButton from '@/components/button/IconButton';
import Paragraph from '@/components/typography/Paragraph';

import { BarProp } from './BarItem.props';

export const BarItem: FC<BarProp> = ({
  children,
  label,
  barOpen = false,
  text,
  name = '',
  link = '/',
  className,
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`${className}  flex items-center justify-start group duration-500 `}
    >
      <IconButton
        label={label}
        accent={pathname === '/' + name ? true : false}
        className={`w-12 ${barOpen ? 'mr-4' : 'mr-0'} hover:!fill-inherit`}
      >
        {children}
      </IconButton>
      {barOpen && (
        <Paragraph
          variant={pathname === '/' + name ? 'dark' : 'white'}
          variantFontSize="subtitle"
          className="group-hover:text-main_dark duration-500"
        >
          {text}
        </Paragraph>
      )}
    </Link>
  );
};
