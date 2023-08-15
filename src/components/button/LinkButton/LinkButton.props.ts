import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LinkButtonProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'secondary' | 'simple';
  disabled?: boolean;
  href?: string;
  className?: string;
}
