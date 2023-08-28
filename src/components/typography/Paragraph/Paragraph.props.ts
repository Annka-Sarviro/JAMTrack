import { ReactNode, RefObject } from 'react';

export interface ParagraphProps {
  variant?: 'dark' | 'white' | 'black';
  // variantFontSize?: 'small' | 'lg_20';
  className?: string;
  children: ReactNode;
  paragraphRef?: RefObject<HTMLParagraphElement>;
}
