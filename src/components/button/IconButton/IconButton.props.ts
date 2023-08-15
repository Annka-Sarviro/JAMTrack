import { ReactNode } from 'react';

export interface IconButtonProps {
  children: ReactNode;
  className?: string;
  label: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}
