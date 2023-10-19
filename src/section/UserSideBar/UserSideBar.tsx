'use client';
import IconButton from '@/components/button/IconButton';
import { useEffect, useState } from 'react';

import { IconsList } from '@/components/UserSideBar/IconsList';
import { getStorageLang } from '@/utils/getStorageLang';
import { dataProps } from './UserSideBar.props';

import ArrowRight from '../../../public/icons/rightArrow.svg';

export const UserSideBar = ({ data, storeLang }: { data: dataProps; storeLang: boolean }) => {
  const [headerHeight, setHeaderHeight] = useState('74px');
  const [sideBarHeight, setSideBarHeight] = useState('652px');
  const [barOpen, setBarOpen] = useState(storeLang);

  useEffect(() => {
    const block = document?.querySelector('header')?.getBoundingClientRect();
    if (block) {
      setHeaderHeight(block.height.toString() + 'px');
    }
  }, [headerHeight]);

  useEffect(() => {
    const sideBar = document?.querySelector('.userSideBar')?.getBoundingClientRect();
    if (sideBar) {
      setSideBarHeight(sideBar.height.toString() + 'px');
    }
  }, []);

  useEffect(() => {
    setBarOpen(getStorageLang());
  }, []);

  const handleBarOpen = () => {
    setBarOpen(!barOpen);
    localStorage.setItem('isBarOpen', JSON.stringify(!barOpen));
  };

  return (
    <div
      style={{ height: `calc(100vh - ${headerHeight})`, top: headerHeight }}
      className={` userSideBar min-h-[652px] bg-main_card duration-500  transition-all rounded-r-xl absolute left-0   'w-20' ${
        barOpen ? 'w-[248px]' : 'w-20'
      }`}
    >
      <IconButton
        label={data.buttons.menuToggle.label}
        variant="arrow"
        accent
        style={{ top: `calc(${sideBarHeight} / 2 - 12px)` }}
        className={`absolute right-[-34px] `}
        onClick={handleBarOpen}
      >
        <ArrowRight
          className={`w-5 fill-inherit stroke-inherit ${barOpen ? 'rotate-180' : ''} duration-200`}
        />
      </IconButton>
      <IconsList barOpen={barOpen} data={data} />
    </div>
  );
};
