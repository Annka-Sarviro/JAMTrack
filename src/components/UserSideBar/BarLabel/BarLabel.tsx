import { FC } from 'react';

import IconButton from '@/components/button/IconButton';
import { BarLabelProp } from './BarLabel.props';

export const BarLabel: FC<BarLabelProp> = ({
  children,
  label,
  barOpen = false,
  onClick,
  className,
  checked = false,
}) => {
  return (
    <label
      onChange={onClick}
      className={`${className}  relative rounded-full  flex items-center cursor-pointer ${
        barOpen ? 'w-[88px]' : 'w-12'
      } h-12 bg-green_back  justify-start group duration-500 `}
    >
      <input className="sr-only  pointer-events-none" value="" type="checkbox" />

      <div
        className={`inset-x-0 left-1 ${
          checked ? 'opacity-100' : 'opacity-0'
        }	transition duration-500 !absolute   w-10 h-10 pointer-events-none`}
      >
        <IconButton
          label={label}
          className={`!w-10 !h-10 ${
            barOpen ? 'mr-4' : 'mr-0'
          } hover:!h-10 hover:!w-10 group-hover:!w-10 group-hover:!h-10`}
        >
          {children[0]}
        </IconButton>
      </div>
      <div
        className={`${barOpen ? 'left-[44px]' : 'left-1'} ${
          checked ? 'opacity-0' : 'opacity-100'
        }  pointer-events-none inset-x-0  duration-500 	transition-all   !absolute  w-10 h-10`}
      >
        <IconButton
          label={label}
          className={`!w-10 !h-10 ${
            barOpen ? 'mr-4' : 'mr-0'
          } hover:!h-10 hover:!w-10 group-hover:!w-10 group-hover:!h-10`}
        >
          {children[1]}
        </IconButton>
      </div>
    </label>
  );
};
