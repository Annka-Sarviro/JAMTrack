import { getDictionary } from '@/app/i18n/settings';
import { Card } from '@/components/common/Card';
import { FullCard } from '@/components/common/FullCard';

import IconButton from '@/components/button/IconButton';
import { ICONS } from '@/components/icons/icons.const';

import { vacancyDataProps } from './VacancyData.props';

const cardData = {
  dataCompany: 'SuperCompany',
  dataPosition: 'frontEnd',
  dataLastStatus: 'hr',
};

const fullCardData = {
  dataCompany: 'SuperBigCompany',
  dataPosition: 'qa',
  dataLastStatus: 'test',
  dataStatus: [
    { status: 'new', data: '2022-12-12' },
    { status: 'hr', data: '2023-01-03' },
    { status: 'test', data: '2023-05-03' },
    { status: 'reject', data: '2023-03-06', reject_status: 'close' },
  ],
  dataLink: 'https://www.superbigcompany.com',
  comment: 'very big big company',
};

export const VacansySection = async ({ lang }: { lang: string }) => {
  const vacancyDictionary: vacancyDataProps = await getDictionary(lang, 'vacancy');

  return (
    <section className="bg-white">
      <div className="container">
        <Card status={vacancyDictionary.status} card={vacancyDictionary.card} cardData={cardData} />
        <FullCard
          status={vacancyDictionary.status}
          card={vacancyDictionary.card}
          cardData={fullCardData}
        />
      </div>

      <IconButton label="add" variant="add" className="absolute right-20 bottom-20">
        <ICONS.PLUS className="fill-inherit stroke-inherit" />
      </IconButton>
    </section>
  );
};
