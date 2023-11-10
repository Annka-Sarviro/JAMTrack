'use client';

import Button from '@/components/button/Button';
import IconButton from '@/components/button/IconButton';
import { CardCheckbox } from '@/components/common/CardCheckbox';
import { CardInput } from '@/components/common/CardInput';
import { AddCategoryForm } from '@/components/forms';
import { ICONS } from '@/components/icons/icons.const';
import Paragraph from '@/components/typography/Paragraph';
import { vacancyCardProps, vacancyStatusProps } from '@/section/VacansySection/VacancyData.props';
import { useState } from 'react';

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
    dataLink: string;
    dataStatus: { status: string; data: string; reject_status?: string }[];
  };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const status_name = status.all_status.map(({ name, text }) =>
    name === cardData.dataLastStatus ? text : ''
  );
  const status_color =
    status.status_color[cardData.dataLastStatus as keyof typeof status.status_color];

  const getChecked = (name: string) => {
    return cardData.dataStatus.some(item => item.status === name);
  };

  const getRejectValue = () => {
    const rejectStatusArray = cardData.dataStatus
      .filter(item => item.reject_status !== undefined)
      .map(item => item.reject_status);

    return rejectStatusArray[0];
  };

  const getTime = (name: string) => {
    const filteredArray = cardData.dataStatus.filter(item => item.status === name);
    const data = filteredArray[0]?.data;
    return data;
  };

  const handleOpenCategory = () => {
    setIsOpen(!isOpen);
    console.log('add');
  };

  return (
    <div className="w-[536px] min-w-[240px] h-[775px] p-4 bg-white rounded-xl border border-main_dark">
      <div className={`bg-${status_color}`}>
        <Paragraph variant="black">{status_name}</Paragraph>
      </div>
      <div>
        <Paragraph>{card.company.name}</Paragraph>
        <CardInput
          button={card.button}
          placeholder={card.company.placeholder}
          name={card.company.name.toLowerCase()}
          error_text={card.company.error_text}
        >
          {cardData.dataCompany}
        </CardInput>
      </div>
      <div>
        <Paragraph>{card.position.name}</Paragraph>
        <CardInput
          button={card.button}
          placeholder={card.position.placeholder}
          name={card.position.name.toLocaleLowerCase()}
          error_text={card.position.error_text}
        >
          {cardData.dataPosition}
        </CardInput>
      </div>

      <div>
        <Paragraph>{card.link.name}</Paragraph>
        <CardInput
          button={card.button}
          placeholder={card.link.placeholder}
          name={card.link.name.toLocaleLowerCase()}
          error_text={card.link.error_text}
        >
          {cardData.dataLink}
        </CardInput>
      </div>

      <div>
        <Paragraph>{card.status.name}</Paragraph>
        {status.all_status.map(({ name, text }) => (
          <CardCheckbox
            key={name}
            name={name}
            text={text}
            reject_status={status.reject_status}
            checked={getChecked(name)}
            reject_value={getRejectValue()}
            time={getTime(name)}
          />
        ))}
      </div>
      <div className="flex relative">
        <IconButton label={card.button.add.label} onClick={handleOpenCategory}>
          <ICONS.PLUS className={`w-5 stroke-inherit fill-inherit `} />
        </IconButton>
        <Paragraph>{card.button.add.text}</Paragraph>

        {isOpen && (
          <AddCategoryForm
            button={card.button}
            handleOpenCategory={handleOpenCategory}
            status={card.status}
          />
        )}
      </div>
      <Button variant="white" className="mx-auto">
        {card.button.del.text}
      </Button>
    </div>
  );
};
