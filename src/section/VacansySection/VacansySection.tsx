import { getDictionary } from '@/app/i18n/settings';
import { Card } from '@/components/common/Card';
import { FullCard } from '@/components/common/FullCard';

import IconButton from '@/components/button/IconButton';
import PlusIcon from '../../../public/icons/plus.svg';
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
    { status: 'new', data: '12.12.2022' },
    { status: 'hr', data: '01.02.2023' },
    { status: 'test', data: '05.03.2023' },
  ],
  dataLink: 'https://superbigcompany.com',
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
        <PlusIcon />
      </IconButton>
    </section>
  );
};
