import Button from '@/components/button/Button';
import Paragraph from '@/components/typography/Paragraph';
import { vacancyCardProps, vacancyStatusProps } from '@/section/VacansySection/VacancyData.props';
import { CardInput } from '../CardInput';

export const FullCard = ({
  card,
  status,
  cardData,
}: {
  card: vacancyCardProps;
  status: vacancyStatusProps;

  cardData: {
    dataCompany: string;
    dataPosition: string;
    dataLastStatus: string;
  };
}) => {
  const status_name = status[cardData.dataLastStatus as keyof typeof status];
  const status_color =
    status.status_color[cardData.dataLastStatus as keyof typeof status.status_color];

  return (
    <div className="w-[336px] min-w-[240px] h-[775px] p-4 bg-white rounded-xl border border-main_dark">
      <div className={`bg-${status_color}`}>
        <Paragraph variant="black">{status_name as string}</Paragraph>
      </div>
      <div>
        <CardInput>{card.company_name}</CardInput>
        <Paragraph>{cardData.dataCompany}</Paragraph>
      </div>
      <div>
        <Paragraph>{card.position}</Paragraph>
        <Paragraph>{cardData.dataPosition}</Paragraph>
      </div>

      <Button variant="white" className="mx-auto">
        {card.button.readMore.text}
      </Button>
    </div>
  );
};
