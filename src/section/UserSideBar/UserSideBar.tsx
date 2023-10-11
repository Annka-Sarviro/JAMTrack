'use client';
import IconButton from '@/components/button/IconButton';
import { useEffect, useState } from 'react';

import ArrowRight from '../../../public/icons/rightArrow.svg';

export const UserSideBar = () => {
  const [headerHeight, setheaderHeight] = useState('74px');
  const [barOpen, setBarOpen] = useState(false);

  useEffect(() => {
    const block = document?.querySelector('header')?.getBoundingClientRect();
    if (block) {
      setheaderHeight(block.height.toString() + 'px');
    }
    console.log(headerHeight);
  }, [headerHeight]);

  const handleBarOpen = () => {
    setBarOpen(!barOpen);
  };

  return (
    <div
      style={{ height: `calc(100vh - ${headerHeight})`, top: headerHeight }}
      className={`bg-main_card duration-200 rounded-r-xl absolute left-0  ${
        barOpen ? 'w-[212px]' : 'w-20'
      }`}
    >
      <IconButton
        label="userIcon"
        variant="arrow"
        accent
        style={{ bottom: `calc((100vh - ${headerHeight}) / 2 - 12px)` }}
        className={`absolute right-[-34px]`}
        onClick={handleBarOpen}
      >
        <ArrowRight
          className={`w-5 fill-inherit stroke-inherit ${barOpen ? 'rotate-180' : ''} duration-200`}
        />
      </IconButton>
      UserSideBar
    </div>
  );
};
