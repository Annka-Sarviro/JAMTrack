import { authOptions } from '@/app/api/auth/_options';
import { Navigation } from '@/components/UserSideBar/Navigation';
import { Settings } from '@/components/UserSideBar/Settings';
import { BarItem } from '../BarItem';

// import IconButton from '@/components/button/IconButton';

// import data from '@/data/usersidebar.json';
import { getSession, signOut } from 'next-auth/react';
import ExitSvg from '../../../../public/icons/exit.svg';
import { IconsListProps } from './IconList.props';

export const IconsList = ({ barOpen, data }: IconsListProps) => {
  const handleClick = async () => {
    const { accessToken } = await getSession(authOptions);

    if (!accessToken) {
      return;
    }
    const res = await fetch('https://vacancy-api-0jon.onrender.com/api/auth/logout', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'token-type': 'access_token',
      },
    });
    if (res.status == 401) {
      console.log('401', res.statusText);

      return null;
    }
    const out = await res.json();
    console.log('out', out);
    signOut({ redirect: false, callbackUrl: '/foo' });
  };

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
              onClick={handleClick}
            >
              <ExitSvg className="w-7 fill-inherit " />
            </BarItem>
          </li>
        </ul>
      </div>
    </div>
  );
};
