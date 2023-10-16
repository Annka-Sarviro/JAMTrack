import { FC } from 'react';

import DashboardSvg from '../../../../public/icons/dashboard.svg';
import InfoSvg from '../../../../public/icons/info.svg';
import StatisticSvg from '../../../../public/icons/statistic.svg';
import UserSvg from '../../../../public/icons/user.svg';

import { BarItem } from '../BarItem';
import { NavigationProps } from './Navigation.props';

import data from '@/data/usersidebar.json';

export const Navigation: FC<NavigationProps> = ({ barOpen }) => {
  return (
    <nav className="">
      <ul className="flex flex-col gap-5">
        {data.buttons.nav.map((item, ind: number) => {
          return (
            <li key={ind} className="flex items-center justify-start h-[48px]">
              <BarItem
                label={item.label}
                barOpen={barOpen}
                text={item.text}
                link={item.link}
                name={item.name}
              >
                {item.name === 'user' && <UserSvg className="w-7 fill-inherit " />}
                {item.name === 'dashboard' && <DashboardSvg className="w-7 fill-inherit " />}
                {item.name === 'info' && <InfoSvg className="w-7 fill-inherit " />}
                {item.name === 'statistic' && <StatisticSvg className="w-7 fill-inherit " />}
              </BarItem>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
