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
    <nav className="mb-[152px]">
      <ul>
        {data.buttons.nav.map((item, ind: number) => {
          return (
            <li key={ind} className="mb-5 last:mb-0">
              <BarItem label={item.label} barOpen={barOpen} text={item.text} link={item.link}>
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
