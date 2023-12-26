import { ReactNode } from 'react';

export type BarProp = {
  children: ReactNode;
  label: string;
  barOpen: boolean;
  text: string;
  link: string;
  name?: string;
  className?: string;
  onClick?: any;
};
