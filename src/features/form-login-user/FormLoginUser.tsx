'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/shared/routes';
import { UiButton, UiForm, UiInput } from '@/components';
import { AuthData, useLoginUserMutation } from '@/entities/users';

export const FormLoginUser: FC = () => {
  const { control, formState, handleSubmit } = useForm<AuthData>({ mode: 'onChange' });
  const [loginUser, { isLoading: isRegisterLoading, isSuccess: isRegisterSuccess }] = useLoginUserMutation();

  useEffect(() => {
    if (isRegisterSuccess) {
      redirect(ROUTES.DASHBOARD);
    }
  }, [isRegisterSuccess]);

  return (
    <UiForm onSubmit={handleSubmit(formData => loginUser(formData))}>
      <Controller
        control={control}
        name='email'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Неверный формат почты',
          },
        }}
        render={({ field }) => (
          <UiInput
            type='text'
            id='email'
            label='Электронная почта'
            placeholder='example@mail.ru'
            error={formState.errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
          minLength: {
            value: 8,
            message: 'Не менее 8 символов',
          },
        }}
        render={({ field }) => (
          <UiInput
            type='password'
            id='password'
            label='Пароль'
            placeholder='••••••••'
            error={formState.errors.password?.message}
            {...field}
          />
        )}
      />
      <UiButton disabled={isRegisterLoading}>Войти</UiButton>
    </UiForm>
  );
};
