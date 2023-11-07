'use client';

import IconButton from '@/components/button/IconButton';
import { ICONS } from '@/components/icons/icons.const';
import Paragraph from '@/components/typography/Paragraph';
import { buttonProps } from '@/section/VacansySection/VacancyData.props';
import { ReactNode, useState } from 'react';

export const CardInput = ({
  children,
  button,
  name,
  placeholder,
  error_text,
}: {
  children: ReactNode;
  button: buttonProps;
  name: string;
  placeholder: string;
  error_text: string;
}) => {
  const defaultValue = children;
  const urlRegex = /^(https?:\/\/)?(www\.)?[\w.-]+\.\w{2,}[\w/.?#&=-]*$/;
  const nameRegex = /.+/;
  let pattern: RegExp;
  let type: string;
  name === 'link' ? (pattern = urlRegex) : (pattern = nameRegex);
  name === 'link' ? (type = 'email') : (type = 'text');

  const [active, setActive] = useState(false);
  const [iconDisabled, setIconDisabled] = useState(false);
  const [inputValue, setInputValue] = useState((defaultValue as string) ?? '');

  const [isValid, setIsValid] = useState(true);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidValue = pattern.test(e.target.value);
    if (!isValidValue) {
      setIsValid(false);
      setIconDisabled(true);
    } else setIconDisabled(false);
    setInputValue(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActive(!active);
    const isValidValue = pattern.test(inputValue);

    if (!isValidValue) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    if (active === true && typeof inputValue === 'string' && inputValue.length !== 0) {
      setActive(false);
      if (inputValue === defaultValue) {
        return;
      }
      const data = {
        [name]: inputValue,
      };
      setIsValid(true);
      //   POST user data
      console.log(data);
      return;
    }
    // setIsValid(true);
  };

  return (
    <>
      <input
        disabled={!active}
        onChange={onInputChange}
        name={name}
        type={type}
        pattern={pattern.toString()}
        placeholder={placeholder}
        value={inputValue}
        className="w-full text-black"
      />
      <IconButton
        label={active ? button.ok.label : button.edit.label}
        onClick={handleClick}
        variant="input"
        className="fill-inherit"
        disabled={iconDisabled}
      >
        {active ? <ICONS.OK /> : <ICONS.EDIT />}
      </IconButton>

      {!isValid && iconDisabled && <Paragraph className="text-red_error">{error_text}</Paragraph>}
    </>
  );
};
