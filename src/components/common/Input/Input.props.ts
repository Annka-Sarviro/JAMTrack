import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  button?: boolean;
  className?: string;
  type?: 'text' | 'email' | 'password';
}
