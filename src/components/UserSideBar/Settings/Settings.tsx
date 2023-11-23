import { i18n } from '@/i18n.config';
import { useTheme } from 'next-themes';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { BarLabel } from '../BarLabel';

import { SettingProp } from './Setting.props';

import EnSvg from '../../../../public/icons/en.svg';
import MoonSvg from '../../../../public/icons/moon.svg';
import SunSvg from '../../../../public/icons/sun.svg';
import UaSvg from '../../../../public/icons/ua.svg';

export const Settings: FC<SettingProp> = ({ barOpen, data }) => {
  const router = useRouter();
  const params = useParams();
  const lang = params.lang;
  const pathName = usePathname();

  const [currentLang, setCurrentLang] = useState('ua');
  const [langChecked, setLangChecked] = useState(true);
  const [themeChecked, setThemeChecked] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setCurrentLang(lang as string);
  }, [lang]);

  useEffect(() => {
    currentLang === 'ua' ? setLangChecked(true) : setLangChecked(false);
  }, [currentLang]);

  useEffect(() => {
    if (theme === 'system') {
      document.querySelector('html')?.classList.contains('dark')
        ? setThemeChecked(false)
        : setThemeChecked(true);
    } else {
      theme === 'dark' ? setThemeChecked(false) : setThemeChecked(true);
    }
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleLangChange = () => {
    setLangChecked(true);
    currentLang === 'en'
      ? router.push(redirectedPathName('ua'))
      : router.push(redirectedPathName('en'));
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';

    const pathnameIsMissingLocale = i18n.locales.every(
      locale => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split('/');
        const isHome = segments.length === 2;
        if (isHome) return '/';

        segments.splice(1, 1);
        return segments.join('/');
      }

      const segments = pathName.split('/');
      segments[1] = locale;
      return segments.join('/');
    }
  };

  const handleThemeChange = () => {
    setThemeChecked(!themeChecked);
    setTheme(theme === 'dark' ? 'light' : 'dark');
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
              checked={item.name === 'lang' ? langChecked : themeChecked}
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
