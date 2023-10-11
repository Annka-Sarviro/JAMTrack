import Link from 'next/link';
import { FC } from 'react';

import IconButton from '@/components/button/IconButton';
import Paragraph from '@/components/typography/Paragraph';

import { BarProp } from './BarItem.props';

export const BarItem: FC<BarProp> = ({ children, label, barOpen = false, text, link = '/' }) => {
  return (
    <Link href={link} className="flex items-center justify-start">
      <IconButton label={label} className={`w-12 ${barOpen ? 'mr-4' : 'mr-0'}`}>
        {children}
      </IconButton>
      {barOpen && (
        <Paragraph variant="white" variantFontSize="subtitle" className="">
          {text}
        </Paragraph>
      )}
    </Link>
  );
};
