import { ICONS } from '@/components/icons/icons.const';
import { FC } from 'react';

import { BarItem } from '../BarItem';
import { NavigationProps } from './Navigation.props';

export const Navigation: FC<NavigationProps> = ({ barOpen, data }) => {
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
                {item.name === 'user' && <ICONS.USER className="w-7 fill-inherit " />}
                {item.name === 'dashboard' && <ICONS.DASHBOARD className="w-7 fill-inherit " />}
                {item.name === 'info' && <ICONS.INFO className="w-7 fill-inherit " />}
                {item.name === 'statistic' && <ICONS.STATISTIC className="w-7 fill-inherit " />}
              </BarItem>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
