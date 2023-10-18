import { Navigation } from '@/components/UserSideBar/Navigation';
import { Settings } from '@/components/UserSideBar/Settings';
import { BarItem } from '../BarItem';
// import IconButton from '@/components/button/IconButton';

// import data from '@/data/usersidebar.json';
import { IconsListProps } from './IconList.props';

import ExitSvg from '../../../../public/icons/exit.svg';

export const IconsList = ({ barOpen, data }: IconsListProps) => {
  return (
    <div className="px-4 py-14 flex flex-col items-left justify-between h-full w-full gap-12">
      <Navigation barOpen={barOpen} data={data} />
      <div className="flex flex-col gap-24">
        <Settings barOpen={barOpen} data={data} />
        <ul>
          <li className="flex items-center justify-start h-[48px]">
            <BarItem
              label={data.buttons.logout.label}
              barOpen={barOpen}
              text={data.buttons.logout.text}
              link={data.buttons.logout.link}
            >
              <ExitSvg className="w-7 fill-inherit " />
            </BarItem>
          </li>
        </ul>
      </div>
    </div>
  );
};
