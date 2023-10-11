import { Navigation } from '@/components/UserSideBar/Navigation';
import { Settings } from '@/components/UserSideBar/Settings';
import { BarItem } from '../BarItem';
// import IconButton from '@/components/button/IconButton';

import data from '@/data/usersidebar.json';
import { IconsListProps } from './IconList.props';

import ExitSvg from '../../../../public/icons/exit.svg';

export const IconsList = ({ barOpen }: IconsListProps) => {
  return (
    <div className="px-4 py-14 flex flex-col items-left justify-between h-full w-full">
      <Navigation barOpen={barOpen} />
      <Settings barOpen={barOpen} />

      <BarItem
        label={data.buttons.logout.label}
        barOpen={barOpen}
        text={data.buttons.logout.text}
        link={data.buttons.logout.link}
      >
        <ExitSvg className="w-7 fill-inherit " />
      </BarItem>
    </div>
  );
};