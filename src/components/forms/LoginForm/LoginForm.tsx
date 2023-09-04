'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/button/Button/Button';
import Input from '@/components/common/Input';
import { ICONS } from '@/components/icons/icons.const';
import { Title } from '@/components/typography/Title/Title';
import { LoginFormProps } from './LoginForm.props';

type FormInputsType = {
  email: string;
  password: string;
};

export const LoginForm: FC<LoginFormProps> = ({ className = '' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsType>({ mode: 'onBlur' });

  const onSubmit = async (data: FormInputsType) => {
    // send data to https://vacancy-api.onrender.com/api/auth/login
    console.log(data);
  };

  return (
    <div className={className}>
      <Title className="mb-7" tag="h2">
        Please, Login
      </Title>
      <form className="flex flex-col gap-6 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="E-mail"
          name="email"
          type="text"
          register={register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: 'Not valid email',
            },
            maxLength: {
              value: 63,
              message: 'Max length is 63 chars',
            },
          })}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          button
          register={register('password', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Min length is 6 symbols',
            },
            maxLength: {
              value: 32,
              message: 'Max length is 32 symbols',
            },
          })}
          error={errors.password?.message}
        />
        <Button type="submit">Login</Button>
      </form>
      <div className="flex flex-col gap-4 w-fit">
        <span className="text-center">or</span>
        <a
          className="flex items-center bg-[#4285F4] w-fit p-[1px] shadow-[0_1px_1px_0_#0000002B,0_0_1px_0_#00000015]"
          href="https://vacancy-api.onrender.com/api/google"
        >
          <ICONS.GOOGLE width="42px" height="42px" />
          <span className="text-white px-2">Continue with Google</span>
        </a>
      </div>
    </div>
  );
};
