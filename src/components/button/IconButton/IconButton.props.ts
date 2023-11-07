import { CSSProperties, ReactNode } from 'react';

export interface IconButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  label: string;
  accent?: boolean;
  variant?: 'add' | 'arrow' | 'sidebar' | 'input';
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
