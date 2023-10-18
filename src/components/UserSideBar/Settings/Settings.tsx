import { useRouter } from 'next/router';
import { FC } from 'react';

import { BarLabel } from '../BarLabel';

import { SettingProp } from './Setting.props';

import EnSvg from '../../../../public/icons/en.svg';
import MoonSvg from '../../../../public/icons/moon.svg';
import SunSvg from '../../../../public/icons/sun.svg';
import UaSvg from '../../../../public/icons/ua.svg';

export const Settings: FC<SettingProp> = ({ barOpen, data }) => {
  const router = useRouter();
  const handleLangChange = () => {
    console.log('click lang');
    router.push(router.pathname, router.asPath, { locale: 'en' });
  };

  const handleThemeChange = () => {
    console.log('click theme');
  };

  return (
    <ul>
      {data.buttons.settings.map((item, ind: number) => {
        return (
          <li key={ind} className="mb-5 last:mb-0">
            <BarLabel
              label={item.label}
              barOpen={barOpen}
              text={item.text}
              link={item.link}
              onClick={item.name === 'lang' ? handleLangChange : handleThemeChange}
            >
              {item.name === 'lang'
                ? [
                    <UaSvg className="w-7 fill-inherit " key="1" />,
                    <EnSvg className="w-7 fill-inherit " key="2" />,
                  ]
                : [
                    <SunSvg className="w-7 fill-inherit " key="3" />,
                    <MoonSvg className="w-7 fill-inherit " key="4" />,
                  ]}
            </BarLabel>
          </li>
        );
      })}
    </ul>
  );
};
