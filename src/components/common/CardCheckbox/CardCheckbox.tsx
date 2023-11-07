'use client';

import { useState } from 'react';

export const CardCheckbox = ({
  name,
  text,
  reject_status,
  checked,
  reject_value,
  time,
}: {
  name: string;
  text: string;
  reject_status: {
    name: string;
    text: string;
  }[];
  checked: boolean;
  reject_value?: string;
  time: string;
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);
  const [selectValue, setSelectValue] = useState(reject_value || '');
  const [selectedDate, setSelectedDate] = useState(time || '');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    setSelectedDate(formattedDate);
    console.log('send status update');
    //   POST CArd update
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
    console.log('send reject status update');
    // POST CArd reject status update
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    console.log('send date update');
    //   POST card date update
  };

  return (
    <div className="flex">
      <label className="flex">
        <input type="checkbox" name="status" checked={isChecked} onChange={handleCheckboxChange} />
        {text}
        {name === 'reject' && (
          <select name="select" value={selectValue} onChange={handleSelectChange}>
            {reject_status.map(({ name, text }) => {
              return (
                <option key={name} value={name}>
                  {text}
                </option>
              );
            })}
          </select>
        )}
      </label>
      {isChecked && (
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border-0 border-b-2 border-main_card"
        ></input>
      )}
    </div>
  );
};
