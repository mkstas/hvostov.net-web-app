'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';
import { AuthData, useLoginMutation } from '@/entities/auth';
import { UiButton, UiForm, UiInput } from '@/shared/ui';

export const LoginForm: FC = () => {
  const { control, formState, handleSubmit, setValue } = useForm<AuthData>({ mode: 'onChange' });
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      setValue('phone', '');
      redirect('/dashboard');
    }
  }, [isSuccess, isError, isLoading, setValue]);

  return (
    <UiForm onSubmit={handleSubmit(formData => login(formData))}>
      <Controller
        control={control}
        name='phone'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
          minLength: {
            value: 11,
            message: 'Не менее 11 символов',
          },
        }}
        render={({ field }) => (
          <UiInput
            type='text'
            id='password'
            label='Номер телефона'
            variant='lg'
            error={formState.errors.phone?.message}
            {...field}
          />
        )}
      />
      <UiButton variant='lg' disabled={isLoading}>
        Войти
      </UiButton>
    </UiForm>
  );
};
