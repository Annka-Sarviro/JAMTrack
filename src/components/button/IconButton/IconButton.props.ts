import { ReactNode } from 'react';

export interface IconButtonProps {
  children: ReactNode;
  className?: string;
  label: string;
  accent?: boolean;
  variant?: 'add';
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}
