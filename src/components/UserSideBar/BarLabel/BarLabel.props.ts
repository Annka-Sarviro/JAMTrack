import { ReactNode } from 'react';

export type BarLabelProp = {
  children: ReactNode[];
  label: string;
  barOpen: boolean;
  text: string;
  link: string;
  className?: string;
  onClick?: () => void;
  checked: boolean;
};
