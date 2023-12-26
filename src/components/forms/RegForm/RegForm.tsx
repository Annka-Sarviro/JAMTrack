'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/button/Button/Button';
import Input from '@/components/common/Input';
import Title from '@/components/typography/Title/Title';
import { Backend_URL } from '@/lib/Constants';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { RegFormProps } from './RegForm.props';

type FormInputsType = {
  email: string;
  password: string;
  username: string;
};

export const RegForm: FC<RegFormProps> = ({ className = '' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsType>({ mode: 'onBlur' });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const onSubmit = async (data: FormInputsType) => {
    const res = await fetch(Backend_URL + '/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),

      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      console.log(data);
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    console.log(response);
    signIn(undefined, { data, callbackUrl });
  };

  return (
    <div className={className}>
      <Title className="mb-7" tag="h2">
        Please, SignUp
      </Title>
      <form className="flex flex-col gap-12 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="User name"
          name="username"
          type="text"
          register={register('username', {
            required: 'This field is required',
            pattern: {
              value: /[a-zA-Z0-9.]/,
              message: 'Not valid username',
            },
            maxLength: {
              value: 63,
              message: 'Max length is 63 chars',
            },
          })}
          error={errors.username?.message}
        />

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
    </div>
  );
};
