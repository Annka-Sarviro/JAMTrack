import { FC } from 'react';

import IconButton from '@/components/button/IconButton';

import { SettingProp } from './Setting.props';

import EnSvg from '../../../../public/icons/en.svg';
import SunSvg from '../../../../public/icons/sun.svg';

export const Settings: FC<SettingProp> = ({ barOpen }) => {
  return (
    <div>
      <IconButton label="">
        <EnSvg className="w-7 fill-inherit " />
      </IconButton>

      <IconButton label="">
        <SunSvg className="w-7 fill-inherit " />
      </IconButton>
    </div>
  );
};
