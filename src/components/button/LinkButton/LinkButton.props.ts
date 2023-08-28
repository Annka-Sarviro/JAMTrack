import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LinkButtonProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'colored' | 'white' | 'simple';
  disabled?: boolean;
  size?: 'big' | 'small';
  href?: string;
  className?: string;
}
