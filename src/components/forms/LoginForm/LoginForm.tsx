'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { GoogleButton } from '@/components/button';
import Button from '@/components/button/Button/Button';
import Input from '@/components/common/Input';
import Title from '@/components/typography/Title/Title';
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
    // auth.js custom authorization email+pass
    console.log(data);
  };

  return (
    <div className={className}>
      <Title className="mb-7" tag="h2">
        Please, Login
      </Title>
      <form className="flex flex-col gap-12 mb-4" onSubmit={handleSubmit(onSubmit)}>
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
        <GoogleButton />
      </div>
    </div>
  );
};
